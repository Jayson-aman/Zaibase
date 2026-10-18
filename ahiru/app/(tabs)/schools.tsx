import React from 'react';
import { schoolQuestionStats } from '../../data/school-counts';
import { ALL_COURSES, type CourseInfo } from '../../data/courses';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useBetaAccess } from '../../hooks/useBetaAccess';
import { useSubscription } from '../../hooks/useSubscription';

const D = {
  bg:          '#2B2420',
  glass:       'rgba(255,255,255,0.05)',
  glassBorder: 'rgba(255,255,255,0.09)',
  gold:        '#C8A84B',
  goldDim:     'rgba(200,168,75,0.15)',
  goldBorder:  'rgba(200,168,75,0.35)',
  white:       '#F5EFE4',
  soft:        '#7FA8CC',
  muted:       '#6E645C',
  pro:         '#B5622E',
  max:         '#A855F7',
};

const glassBlur: any = Platform.OS === 'web'
  ? { backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }
  : {};

type SchoolEntry = {
  key: string;
  name: string;
  emoji: string;
  hensachi: string;
  gender: string;
  tier: 'free' | 'pro' | 'max';
  note?: string;
};

type SchoolGroup = {
  label: string;
  icon: string;
  color: string;
  schools: SchoolEntry[];
};

const BASE_SCHOOL_GROUPS: SchoolGroup[] = [
  {
    label: '関関同立附属',
    icon: '🎓',
    color: '#C8A84B',
    schools: [
      { key: 'kankan', name: '関関同立附属', emoji: '🎓', hensachi: '55〜68', gender: '各校による', tier: 'pro', note: '関大附属・関学中・同志社・立命館' },
    ],
  },
  {
    label: '大阪 難関校',
    icon: '🏆',
    color: '#E74C3C',
    schools: [
      { key: 'toin',    name: '大阪桐蔭',   emoji: '🌸', hensachi: '57〜62', gender: '共学', tier: 'pro' },
      { key: 'kaimei',  name: '開明',       emoji: '🌅', hensachi: '58〜62', gender: '共学', tier: 'pro' },
      { key: 'kindai',  name: '近畿大学附属', emoji: '🎯', hensachi: '55〜60', gender: '共学', tier: 'pro' },
    ],
  },
  {
    label: '大阪 有力校',
    icon: '📚',
    color: '#B5622E',
    schools: [
      { key: 'kansai-hokuyo', name: '関西大学北陽', emoji: '🎓', hensachi: '54〜58', gender: '共学', tier: 'pro' },
      { key: 'myojo',         name: '明星',         emoji: '✨', hensachi: '56〜62', gender: '男子', tier: 'pro' },
      { key: 'tezukayama',    name: '帝塚山学院',   emoji: '🌺', hensachi: '55〜60', gender: '女子', tier: 'pro' },
      { key: 'kinrankai',     name: '金蘭会',       emoji: '🌼', hensachi: '50〜56', gender: '女子', tier: 'pro' },
      { key: 'otani',         name: '大谷',         emoji: '🍁', hensachi: '46〜52', gender: '女子', tier: 'pro' },
    ],
  },
  {
    label: '東京 MARCH・早慶附属',
    icon: '🗼',
    color: '#A855F7',
    schools: [
      { key: 'tokyo-meidai',    name: '明大明治',      emoji: '🏛️', hensachi: '62〜66', gender: '共学', tier: 'max' },
      { key: 'tokyo-aoyama',    name: '青山学院',      emoji: '🌿', hensachi: '58〜64', gender: '共学', tier: 'max' },
      { key: 'tokyo-chuo',      name: '中央大学附属',  emoji: '🏫', hensachi: '57〜62', gender: '共学', tier: 'max' },
      { key: 'tokyo-hosei',     name: '法政大学第二',  emoji: '⚖️', hensachi: '56〜60', gender: '共学', tier: 'max' },
      { key: 'tokyo-gakushuin', name: '学習院',        emoji: '👑', hensachi: '54〜58', gender: '共学', tier: 'max' },
    ],
  },
  {
    label: '高校受験',
    icon: '🎌',
    color: '#10B981',
    schools: [
      { key: 'koko-hibiya',     name: '都立日比谷',     emoji: '🏯', hensachi: '70+',   gender: '共学', tier: 'max' },
      { key: 'koko-waseda',     name: '早稲田大附属',   emoji: '⛩️', hensachi: '72〜75', gender: '男子', tier: 'max' },
      { key: 'koko-meidai',     name: '明大明治高校',   emoji: '🏛️', hensachi: '68〜72', gender: '共学', tier: 'max' },
      { key: 'koko-shitennoji', name: '四天王寺(高)',   emoji: '⛩️', hensachi: '62〜68', gender: '女子', tier: 'pro' },
    ],
  },
];

// 問題データがあるのに一覧に載っていなかった学校を、courses.ts の定義から自動で足す
// （高校受験の学校が4校しか出ていなかった。データには13校以上あった。2026/10/7）。
// 名前・偏差値・男女・MAX限定の別は courses.ts が持っているので、ここに二重に書かない。
function entryFromCourse(c: CourseInfo): SchoolEntry {
  return {
    key: c.key,
    name: c.name,
    emoji: c.emoji,
    hensachi: c.hensachi ?? '',
    gender: c.gender ?? '共学',
    tier: c.maxOnly ? 'max' : 'pro',
  };
}

// 学校の地域。名前だけでは、どの学校が関西・関東・名古屋・福岡なのか分からなかったので、
// 地域ごと（さらに中学受験／高校受験ごと）に分けて並べる（2026/10/8、ユーザー要望）。
type RegionKey = 'kansai' | 'kanto' | 'tokai' | 'kyushu' | 'national';

const REGIONS: { key: RegionKey; label: string; icon: string; color: string }[] = [
  { key: 'kansai',   label: '関西（大阪・兵庫・京都・奈良）', icon: '🏯', color: '#E74C3C' },
  { key: 'kanto',    label: '関東（東京・神奈川）',           icon: '🗼', color: '#A855F7' },
  { key: 'tokai',    label: '東海（名古屋）',                 icon: '⚓', color: '#0EA5E9' },
  { key: 'kyushu',   label: '九州（福岡）',                   icon: '🌟', color: '#10B981' },
  { key: 'national', label: '全国',                           icon: '🏆', color: '#C8A84B' },
];

// 高校の学校は、key だけでは地域が決まらないので、ここに書く。
const KANTO_KOKO = new Set(['koko-hibiya', 'koko-waseda', 'koko-meidai', 'koko-kasei', 'koko-keio', 'koko-azabu']);
const TOKAI_KOKO = new Set(['koko-tokai', 'koko-taki', 'koko-nanzan']);
const KYUSHU_KOKO = new Set(['koko-kurume', 'koko-seinan', 'koko-ohori']);

function regionOf(key: string): RegionKey {
  if (key.startsWith('tokyo-') || KANTO_KOKO.has(key)) return 'kanto';
  if (key.startsWith('nagoya-') || TOKAI_KOKO.has(key)) return 'tokai';
  if (key.startsWith('fukuoka-') || KYUSHU_KOKO.has(key)) return 'kyushu';
  if (key === 'koko-top') return 'national';
  // 上のどれでもない学校は、大阪・兵庫・奈良の学校（関西）
  return 'kansai';
}

function buildSchoolGroups(): SchoolGroup[] {
  const listed = new Set(BASE_SCHOOL_GROUPS.flatMap((g) => g.schools.map((s) => s.key)));
  // 問題データがあるのに一覧に載っていなかった学校を、courses.ts の定義から足す
  // （高校受験の学校が4校しか出ていなかった）。偏差値の定義があるコースだけが「学校」。
  const extra = ALL_COURSES.filter((c) => c.hensachi && !listed.has(c.key)).map(entryFromCourse);
  const all = [...BASE_SCHOOL_GROUPS.flatMap((g) => g.schools), ...extra];
  const examOf = (key: string): 'chugaku' | 'koko' =>
    ALL_COURSES.find((c) => c.key === key)?.examType ?? (key.startsWith('koko-') ? 'koko' : 'chugaku');

  const groups: SchoolGroup[] = [];
  for (const r of REGIONS) {
    for (const exam of ['chugaku', 'koko'] as const) {
      const schools = all.filter((s) => regionOf(s.key) === r.key && examOf(s.key) === exam);
      if (schools.length === 0) continue;
      groups.push({
        label: `${r.label}｜${exam === 'chugaku' ? '中学受験' : '高校受験'}`,
        icon: r.icon,
        color: r.color,
        schools,
      });
    }
  }
  return groups;
}

const SCHOOL_GROUPS: SchoolGroup[] = buildSchoolGroups();

export default function SchoolsScreen() {
  const router = useRouter();
  const { hasAccess: betaAccess } = useBetaAccess();
  const { tier: subTier, loading: subLoading } = useSubscription();
  const isPro = subTier === 'pro' || subTier === 'max' || betaAccess;
  const isMax = subTier === 'max' || betaAccess;

  function canAccess(tier: SchoolEntry['tier']): boolean {
    if (tier === 'free') return true;
    if (tier === 'pro') return isPro;
    if (tier === 'max') return isMax;
    return false;
  }

  function handleSchool(school: SchoolEntry) {
    // 課金状態の取得中は加入者でも 'free' に見えるため、確定するまで待つ。
    if (subLoading) return;
    if (!canAccess(school.tier)) {
      router.push('/paywall');
      return;
    }
    router.push(`/school/${school.key}`);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🏫 学校別 入試問題</Text>
          <Text style={styles.headerSub}>目標校を選んで本番レベルの問題を解こう</Text>
        </View>

        <TouchableOpacity
          style={styles.admissionCta}
          activeOpacity={0.9}
          onPress={() => router.push('/admissions')}
        >
          <Text style={styles.admissionCtaTitle}>📋 募集要項を調べる</Text>
          <Text style={styles.admissionCtaSub}>全国の中学・高校の公式募集要項を年度別に検索 →</Text>
        </TouchableOpacity>

        {SCHOOL_GROUPS.map((group) => (
          <View key={group.label} style={styles.group}>
            <View style={styles.groupHeader}>
              <Text style={styles.groupIcon}>{group.icon}</Text>
              <Text style={[styles.groupLabel, { color: group.color }]}>{group.label}</Text>
            </View>

            {group.schools.map((school) => {
              const accessible = canAccess(school.tier);
              return (
                <TouchableOpacity
                  key={school.key}
                  style={[styles.schoolCard, !accessible && styles.schoolCardLocked]}
                  onPress={() => handleSchool(school)}
                  activeOpacity={0.75}
                >
                  <View style={styles.schoolLeft}>
                    <Text style={styles.schoolEmoji}>{school.emoji}</Text>
                    <View>
                      <Text style={styles.schoolName}>{school.name}</Text>
                      {school.note && <Text style={styles.schoolNote}>{school.note}</Text>}
                      <Text style={styles.schoolMeta}>偏差値 {school.hensachi}　{school.gender}</Text>
                      {schoolQuestionStats(school.key).total > 0 && (
                        <Text style={styles.schoolCount}>
                          {schoolQuestionStats(school.key).subjects}科・全{schoolQuestionStats(school.key).total}問（各科目 無料5問）
                        </Text>
                      )}
                    </View>
                  </View>
                  <View style={styles.schoolRight}>
                    {!accessible && (
                      <View style={[
                        styles.tierBadge,
                        school.tier === 'max' ? styles.tierBadgeMax : styles.tierBadgePro,
                      ]}>
                        <Text style={styles.tierBadgeText}>
                          {school.tier === 'max' ? 'MAX' : 'PRO'}
                        </Text>
                      </View>
                    )}
                    <Text style={[styles.arrow, !accessible && styles.arrowLocked]}>›</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>📝 一問一答は「クイズ」タブで復習できます</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: D.bg },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 16, paddingBottom: 32 },
  header: {
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: D.glassBorder,
    marginBottom: 16,
  },
  headerTitle: {
    color: D.white,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  headerSub: {
    color: D.soft,
    fontSize: 13,
  },
  admissionCta: {
    backgroundColor: '#B5622E',
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 18,
  },
  admissionCtaTitle: { color: '#fff', fontSize: 16, fontWeight: '800' },
  admissionCtaSub: { color: 'rgba(255,255,255,0.9)', fontSize: 12, marginTop: 4 },
  group: {
    marginBottom: 24,
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  groupIcon: { fontSize: 18 },
  groupLabel: {
    fontSize: 15,
    fontWeight: '700',
  },
  schoolCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: D.glass,
    borderWidth: 1,
    borderColor: D.glassBorder,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 8,
    ...glassBlur,
  },
  schoolCardLocked: {
    opacity: 0.65,
  },
  schoolLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  schoolEmoji: { fontSize: 26 },
  schoolName: {
    color: D.white,
    fontSize: 15,
    fontWeight: '600',
  },
  schoolNote: {
    color: D.soft,
    fontSize: 11,
    marginTop: 1,
  },
  schoolCount: { fontSize: 12, fontWeight: '800', color: '#0F766E', marginTop: 2 },
  schoolMeta: {
    color: D.muted,
    fontSize: 11,
    marginTop: 2,
  },
  schoolRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tierBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  tierBadgePro: { backgroundColor: 'rgba(59,130,246,0.3)', borderWidth: 1, borderColor: D.pro },
  tierBadgeMax: { backgroundColor: 'rgba(168,85,247,0.3)', borderWidth: 1, borderColor: D.max },
  tierBadgeText: {
    color: D.white,
    fontSize: 10,
    fontWeight: '700',
  },
  arrow: {
    color: D.soft,
    fontSize: 22,
    fontWeight: '300',
  },
  arrowLocked: { color: D.muted },
  footer: {
    marginTop: 8,
    padding: 14,
    backgroundColor: D.glass,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: D.glassBorder,
  },
  footerText: {
    color: D.soft,
    fontSize: 12,
    textAlign: 'center',
  },
});
