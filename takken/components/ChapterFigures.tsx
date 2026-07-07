import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import type { ChapterFigure, Subject } from '../data/chapters';

/**
 * 章の構造化図解をフルカラーで描画する。React Native の View/Text のみで
 * 構成しているため、iPhone・iPad・Web で同一表示になり（画像・SVG 依存なし）、
 * 拡大しても劣化しない。市販テキスト級の色分け・強調を施す。
 */

type Theme = { main: string; soft: string; softBg: string; tint: string };

const SUBJECT_THEME: Record<Subject, Theme> = {
  権利関係: { main: '#7C3AED', soft: '#8B5CF6', softBg: '#F5F3FF', tint: '#EDE9FE' },
  法令上の制限: { main: '#0369A1', soft: '#0284C7', softBg: '#EFF6FF', tint: '#DBEAFE' },
  宅建業法: { main: '#059669', soft: '#10B981', softBg: '#ECFDF5', tint: '#D1FAE5' },
  '税・その他': { main: '#B45309', soft: '#D97706', softBg: '#FFFBEB', tint: '#FEF3C7' },
};
const DEFAULT_THEME: Theme = { main: '#1E40AF', soft: '#3B82F6', softBg: '#EFF6FF', tint: '#DBEAFE' };

// ○×△ / 必要不要 などを検出して色を返す（セルの意味的な色分け）
const POS = ['○', '◯', '可能', '必要', 'できる', '有効', '課税', '対象', 'あり', '要', '許可', '届出必要'];
const NEG = ['×', '✕', '不可', '不要', 'できない', '無効', '非課税', '対象外', 'なし', '不許可', '届出不要', '禁止'];
const NEU = ['△', '場合による', '例外', '原則'];

function cellTone(text: string): 'pos' | 'neg' | 'neu' | null {
  const t = text.trim();
  if (NEG.some((k) => t === k || t.startsWith(k))) return 'neg';
  if (POS.some((k) => t === k || t.startsWith(k))) return 'pos';
  if (t.length <= 6 && NEU.some((k) => t.includes(k))) return 'neu';
  return null;
}

const TONE_STYLE = {
  pos: { bg: '#DCFCE7', color: '#15803D' },
  neg: { bg: '#FEE2E2', color: '#B91C1C' },
  neu: { bg: '#FEF3C7', color: '#B45309' },
} as const;

// 数値・％・期間を太字強調する（市販テキストの赤字強調に相当）
function HighlightNumbers({ text, color, base }: { text: string; color: string; base: any }) {
  const parts = text.split(/(\d[\d,.]*\s?(?:㎡|ha|％|%|年|月|日|週間|割|分の\d+|万円|円|m|cm|倍|人|回)?)/g);
  return (
    <Text style={base}>
      {parts.map((p, i) =>
        /^\d/.test(p) ? (
          <Text key={i} style={{ color, fontWeight: '800' }}>{p}</Text>
        ) : (
          <Text key={i}>{p}</Text>
        ),
      )}
    </Text>
  );
}

export default function ChapterFigures({
  figures,
  subject,
}: {
  figures?: ChapterFigure[];
  subject?: Subject;
}) {
  if (!figures || figures.length === 0) return null;
  const theme = (subject && SUBJECT_THEME[subject]) || DEFAULT_THEME;
  return (
    <View style={styles.wrap}>
      <View style={[styles.sectionBar, { backgroundColor: theme.main }]}>
        <Text style={styles.sectionTitle}>🎨 フルカラー図解でチェック</Text>
      </View>
      {figures.map((fig, i) => (
        <Figure key={i} fig={fig} theme={theme} />
      ))}
    </View>
  );
}

function Figure({ fig, theme }: { fig: ChapterFigure; theme: Theme }) {
  switch (fig.type) {
    case 'table':
      return <TableFigure fig={fig} theme={theme} />;
    case 'compare':
      return <CompareFigure fig={fig} theme={theme} />;
    case 'flow':
      return <FlowFigure fig={fig} theme={theme} />;
    case 'hierarchy':
      return <HierarchyFigure fig={fig} theme={theme} />;
    case 'timeline':
      return <TimelineFigure fig={fig} theme={theme} />;
    case 'callout':
      return <CalloutFigure fig={fig} />;
    default:
      return null;
  }
}

function Card({ theme, children }: { theme: Theme; children: React.ReactNode }) {
  return <View style={[styles.card, { borderLeftColor: theme.main }]}>{children}</View>;
}

function FigTitle({ title, theme }: { title?: string; theme: Theme }) {
  if (!title) return null;
  return <Text style={[styles.figTitle, { color: theme.main }]}>{title}</Text>;
}

function NoteLine({ note }: { note?: string }) {
  if (!note) return null;
  return <Text style={styles.note}>※ {note}</Text>;
}

function TableFigure({ fig, theme }: { fig: Extract<ChapterFigure, { type: 'table' }>; theme: Theme }) {
  return (
    <Card theme={theme}>
      <FigTitle title={fig.title} theme={theme} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tableWrap}>
          <View style={styles.tr}>
            {fig.headers.map((h, i) => (
              <View key={i} style={[styles.td, { backgroundColor: theme.main }, i === 0 && styles.tdFirst]}>
                <Text style={styles.tdHeadText}>{h}</Text>
              </View>
            ))}
          </View>
          {fig.rows.map((row, ri) => (
            <View key={ri} style={styles.tr}>
              {row.map((cell, ci) => {
                const tone = ci > 0 ? cellTone(cell) : null;
                const toneStyle = tone ? TONE_STYLE[tone] : null;
                return (
                  <View
                    key={ci}
                    style={[
                      styles.td,
                      ci === 0 && { backgroundColor: theme.tint },
                      ri % 2 === 1 && ci > 0 && !toneStyle && styles.trAlt,
                      toneStyle && { backgroundColor: toneStyle.bg },
                    ]}
                  >
                    {toneStyle ? (
                      <Text style={[styles.tdText, { color: toneStyle.color, fontWeight: '800' }]}>{cell}</Text>
                    ) : ci === 0 ? (
                      <Text style={[styles.tdText, styles.tdTextFirst, { color: theme.main }]}>{cell}</Text>
                    ) : (
                      <HighlightNumbers text={cell} color={theme.main} base={styles.tdText} />
                    )}
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>
      <NoteLine note={fig.note} />
    </Card>
  );
}

function CompareFigure({ fig, theme }: { fig: Extract<ChapterFigure, { type: 'compare' }>; theme: Theme }) {
  const cols = [
    { data: fig.left, head: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE' },
    { data: fig.right, head: '#DC2626', bg: '#FEF2F2', border: '#FECACA' },
  ];
  return (
    <Card theme={theme}>
      <FigTitle title={fig.title} theme={theme} />
      <View style={styles.compareRow}>
        {cols.map((col, i) => (
          <View key={i} style={[styles.compareCol, { backgroundColor: col.bg, borderColor: col.border }]}>
            <View style={[styles.compareHeadBar, { backgroundColor: col.head }]}>
              <Text style={styles.compareHeadText}>{col.data.heading}</Text>
            </View>
            {col.data.items.map((it, j) => (
              <View key={j} style={styles.compareItemRow}>
                <Text style={[styles.compareBullet, { color: col.head }]}>●</Text>
                <HighlightNumbers text={it} color={col.head} base={styles.compareItemText} />
              </View>
            ))}
          </View>
        ))}
      </View>
      <NoteLine note={fig.note} />
    </Card>
  );
}

function FlowFigure({ fig, theme }: { fig: Extract<ChapterFigure, { type: 'flow' }>; theme: Theme }) {
  return (
    <Card theme={theme}>
      <FigTitle title={fig.title} theme={theme} />
      {fig.steps.map((step, i) => (
        <View key={i}>
          <View style={styles.flowStep}>
            <View style={[styles.flowNum, { backgroundColor: theme.main }]}>
              <Text style={styles.flowNumText}>{i + 1}</Text>
            </View>
            <View style={[styles.flowBody, { backgroundColor: theme.softBg, borderColor: theme.tint }]}>
              <Text style={[styles.flowLabel, { color: theme.main }]}>{step.label}</Text>
              {step.detail ? (
                <HighlightNumbers text={step.detail} color={theme.soft} base={styles.flowDetail} />
              ) : null}
            </View>
          </View>
          {i < fig.steps.length - 1 && <Text style={[styles.flowArrow, { color: theme.soft }]}>▼</Text>}
        </View>
      ))}
      <NoteLine note={fig.note} />
    </Card>
  );
}

function HierarchyFigure({ fig, theme }: { fig: Extract<ChapterFigure, { type: 'hierarchy' }>; theme: Theme }) {
  return (
    <Card theme={theme}>
      <FigTitle title={fig.title} theme={theme} />
      <View style={[styles.hierRoot, { backgroundColor: theme.main }]}>
        <Text style={styles.hierRootText}>{fig.root}</Text>
      </View>
      <Text style={[styles.hierConnector, { color: theme.soft }]}>▼</Text>
      <View style={styles.hierChildren}>
        {fig.children.map((child, i) => (
          <View key={i} style={[styles.hierChild, { backgroundColor: theme.softBg, borderColor: theme.tint }]}>
            <Text style={[styles.hierChildLabel, { color: theme.main }]}>{child.label}</Text>
            {child.sub?.map((s, j) => (
              <View key={j} style={styles.hierSubRow}>
                <Text style={[styles.hierSubDot, { color: theme.soft }]}>・</Text>
                <HighlightNumbers text={s} color={theme.main} base={styles.hierSub} />
              </View>
            ))}
          </View>
        ))}
      </View>
      <NoteLine note={fig.note} />
    </Card>
  );
}

function TimelineFigure({ fig, theme }: { fig: Extract<ChapterFigure, { type: 'timeline' }>; theme: Theme }) {
  return (
    <Card theme={theme}>
      <FigTitle title={fig.title} theme={theme} />
      {fig.events.map((ev, i) => (
        <View key={i} style={styles.tlRow}>
          <View style={styles.tlLeft}>
            <View style={[styles.tlDot, { backgroundColor: theme.main }]} />
            {i < fig.events.length - 1 && <View style={[styles.tlLine, { backgroundColor: theme.tint }]} />}
          </View>
          <View style={[styles.tlBody, { backgroundColor: theme.softBg }]}>
            <Text style={[styles.tlWhen, { color: theme.main }]}>{ev.when}</Text>
            <HighlightNumbers text={ev.what} color={theme.soft} base={styles.tlWhat} />
          </View>
        </View>
      ))}
      <NoteLine note={fig.note} />
    </Card>
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
  sectionBar: { borderRadius: 10, paddingVertical: 8, paddingHorizontal: 12, marginBottom: 12 },
  sectionTitle: { fontSize: 15, fontWeight: '800', color: '#fff' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  figTitle: { fontSize: 14, fontWeight: '800', marginBottom: 10 },

  // table
  tableWrap: { borderRadius: 8, overflow: 'hidden', borderWidth: 1, borderColor: '#E2E8F0' },
  tr: { flexDirection: 'row' },
  trAlt: { backgroundColor: '#F8FAFC' },
  td: { paddingVertical: 8, paddingHorizontal: 10, minWidth: 92, borderWidth: 0.5, borderColor: '#E2E8F0', justifyContent: 'center' },
  tdFirst: { minWidth: 112 },
  tdHeadText: { color: '#fff', fontSize: 12, fontWeight: '800' },
  tdText: { color: '#334155', fontSize: 12, lineHeight: 18 },
  tdTextFirst: { fontWeight: '800' },
  note: { fontSize: 11, color: '#64748B', marginTop: 8 },

  // compare
  compareRow: { flexDirection: 'row', gap: 8 },
  compareCol: { flex: 1, borderRadius: 10, borderWidth: 1, overflow: 'hidden' },
  compareHeadBar: { paddingVertical: 6, paddingHorizontal: 8 },
  compareHeadText: { fontSize: 13, fontWeight: '800', color: '#fff', textAlign: 'center' },
  compareItemRow: { flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 4 },
  compareBullet: { fontSize: 9, marginRight: 4, marginTop: 3 },
  compareItemText: { flex: 1, fontSize: 12, color: '#334155', lineHeight: 18 },

  // flow
  flowStep: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  flowNum: { width: 26, height: 26, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  flowNumText: { color: '#fff', fontSize: 13, fontWeight: '800' },
  flowBody: { flex: 1, borderRadius: 8, padding: 10, borderWidth: 1 },
  flowLabel: { fontSize: 13, fontWeight: '800' },
  flowDetail: { fontSize: 12, color: '#475569', marginTop: 3, lineHeight: 18 },
  flowArrow: { textAlign: 'center', fontSize: 15, marginVertical: 3, marginLeft: 13 },

  // hierarchy
  hierRoot: { borderRadius: 8, paddingVertical: 8, paddingHorizontal: 14, alignSelf: 'center' },
  hierRootText: { color: '#fff', fontSize: 13, fontWeight: '800' },
  hierConnector: { textAlign: 'center', fontSize: 13, marginVertical: 2 },
  hierChildren: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  hierChild: { borderRadius: 8, padding: 10, borderWidth: 1, minWidth: 104, flexGrow: 1 },
  hierChildLabel: { fontSize: 12, fontWeight: '800', marginBottom: 4 },
  hierSubRow: { flexDirection: 'row' },
  hierSubDot: { fontSize: 11 },
  hierSub: { flex: 1, fontSize: 11, color: '#475569', lineHeight: 17 },

  // timeline
  tlRow: { flexDirection: 'row', gap: 10 },
  tlLeft: { alignItems: 'center', width: 16 },
  tlDot: { width: 12, height: 12, borderRadius: 6, marginTop: 4 },
  tlLine: { flex: 1, width: 2, marginTop: 2 },
  tlBody: { flex: 1, borderRadius: 8, padding: 10, marginBottom: 10 },
  tlWhen: { fontSize: 12, fontWeight: '800' },
  tlWhat: { fontSize: 12, color: '#334155', lineHeight: 18, marginTop: 2 },

  // callout
  callout: { borderLeftWidth: 5, borderRadius: 8, padding: 12, marginBottom: 12 },
  calloutLabel: { fontSize: 12, fontWeight: '800', marginBottom: 4 },
  calloutBody: { fontSize: 13, lineHeight: 20 },
});
