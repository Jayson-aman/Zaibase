import React from 'react';
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
  bg:          '#040C1C',
  glass:       'rgba(255,255,255,0.05)',
  glassBorder: 'rgba(255,255,255,0.09)',
  gold:        '#C8A84B',
  goldDim:     'rgba(200,168,75,0.15)',
  goldBorder:  'rgba(200,168,75,0.35)',
  white:       '#EDF4FF',
  soft:        '#7FA8CC',
  muted:       '#3E5870',
  pro:         '#3B82F6',
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

const SCHOOL_GROUPS: SchoolGroup[] = [
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
    color: '#3B82F6',
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
      { key: 'tokyo-gakushiin', name: '学習院',        emoji: '👑', hensachi: '54〜58', gender: '共学', tier: 'max' },
    ],
  },
  {
    label: '高校受験',
    icon: '🎌',
    color: '#10B981',
    schools: [
      { key: 'koko-hibiya',  name: '都立日比谷',   emoji: '🏯', hensachi: '70+',   gender: '共学', tier: 'max' },
      { key: 'koko-waseda',  name: '早稲田大附属', emoji: '⛩️', hensachi: '72〜75', gender: '男子', tier: 'max' },
      { key: 'koko-meidai',  name: '明大明治高校', emoji: '🏛️', hensachi: '68〜72', gender: '共学', tier: 'max' },
    ],
  },
];

export default function SchoolsScreen() {
  const router = useRouter();
  const { hasAccess: betaAccess } = useBetaAccess();
  const { tier: subTier } = useSubscription();
  const isPro = subTier === 'pro' || subTier === 'max' || betaAccess;
  const isMax = subTier === 'max' || betaAccess;

  function canAccess(tier: SchoolEntry['tier']): boolean {
    if (tier === 'free') return true;
    if (tier === 'pro') return isPro;
    if (tier === 'max') return isMax;
    return false;
  }

  function handleSchool(school: SchoolEntry) {
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
