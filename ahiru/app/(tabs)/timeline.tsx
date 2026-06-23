import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

type Era = '縄文・弥生' | '古墳・飛鳥・奈良' | '平安' | '鎌倉・室町' | '戦国・安土桃山' | '江戸' | '明治・大正' | '昭和・平成・令和';

const ERAS: { key: Era; emoji: string; color: string; period: string }[] = [
  { key: '縄文・弥生', emoji: '🪨', color: '#8B6914', period: '〜3世紀' },
  { key: '古墳・飛鳥・奈良', emoji: '🏛', color: '#7B4E2D', period: '3〜8世紀' },
  { key: '平安', emoji: '🌸', color: '#C0398B', period: '794〜1185年' },
  { key: '鎌倉・室町', emoji: '⚔️', color: '#2E6B3E', period: '1185〜1573年' },
  { key: '戦国・安土桃山', emoji: '🏯', color: '#B73A3A', period: '1467〜1603年' },
  { key: '江戸', emoji: '🗾', color: '#1A5276', period: '1603〜1868年' },
  { key: '明治・大正', emoji: '🎌', color: '#117864', period: '1868〜1926年' },
  { key: '昭和・平成・令和', emoji: '🏙', color: '#4A235A', period: '1926年〜現在' },
];

const EVENTS: Record<Era, { year: string; event: string; note: string }[]> = {
  '縄文・弥生': [
    { year: '約1万4千年前', event: '縄文時代始まる', note: '土器・竪穴住居。狩猟・採集生活。' },
    { year: '約2300年前', event: '弥生時代始まる', note: '稲作が大陸から伝来。金属器（鉄・銅）使用開始。' },
    { year: '57年', event: '倭の奴国王が後漢に使者', note: '金印（漢委奴国王）を贈られる。' },
    { year: '239年', event: '卑弥呼が魏に使者を送る', note: '邪馬台国の女王。「親魏倭王」の称号を得る。' },
  ],
  '古墳・飛鳥・奈良': [
    { year: '3〜6世紀', event: '古墳時代', note: '前方後円墳が各地に造られる。大和政権の統一が進む。' },
    { year: '538年（593年説）', event: '仏教伝来', note: '百済から伝わる。聖徳太子が仏教を保護。' },
    { year: '604年', event: '十七条の憲法', note: '聖徳太子が制定。「和を以て貴しとなす」。' },
    { year: '645年', event: '大化の改新', note: '中大兄皇子・中臣鎌足が蘇我氏を滅ぼす。公地公民制。' },
    { year: '710年', event: '平城京遷都', note: '奈良に都。唐の長安を模した都市計画。' },
    { year: '743年', event: '墾田永年私財法', note: '開墾した土地の永久私有を認める。荘園の始まり。' },
    { year: '752年', event: '東大寺の大仏開眼', note: '聖武天皇の発願。国分寺・国分尼寺を全国に建立。' },
  ],
  '平安': [
    { year: '794年', event: '平安京遷都', note: '桓武天皇が京都に遷都。以後1000年以上の都。' },
    { year: '894年', event: '遣唐使廃止', note: '菅原道真の建議。国風文化（かな文字・源氏物語）が発展。' },
    { year: '1016年', event: '藤原道長が摂政になる', note: '「この世をば わが世とぞ思う 望月の…」摂関政治の全盛期。' },
    { year: '1086年', event: '院政の始まり', note: '白河上皇が院政を開始。上皇が実権を持つ。' },
    { year: '1156年', event: '保元の乱', note: '武士が中央政治に本格登場。源氏・平氏が活躍。' },
    { year: '1185年', event: '壇ノ浦の戦い', note: '源義経が平氏を滅ぼす。源頼朝が全国に地頭・守護を設置。' },
  ],
  '鎌倉・室町': [
    { year: '1192年', event: '源頼朝が征夷大将軍に', note: '鎌倉幕府成立。武家政権の始まり。御恩と奉公の主従関係。' },
    { year: '1221年', event: '承久の乱', note: '後鳥羽上皇vs北条義時。幕府が勝利し、六波羅探題を設置。' },
    { year: '1232年', event: '御成敗式目（貞永式目）', note: '北条泰時が制定。武家法の基本となる51か条。' },
    { year: '1274・1281年', event: '元寇（文永・弘安の役）', note: 'フビライの軍が2度来襲。神風（暴風雨）で撃退。' },
    { year: '1333年', event: '鎌倉幕府滅亡', note: '後醍醐天皇の倒幕運動。足利尊氏らが幕府を滅ぼす。' },
    { year: '1338年', event: '室町幕府成立', note: '足利尊氏が将軍に。南北朝の争いが続く。' },
    { year: '1404年', event: '日明貿易（勘合貿易）開始', note: '足利義満が明と国交。勘合符で正式な貿易船を証明。' },
    { year: '1467年', event: '応仁の乱', note: '11年間の内乱。戦国時代の始まり。下剋上の風潮。' },
  ],
  '戦国・安土桃山': [
    { year: '1543年', event: '鉄砲伝来', note: '種子島にポルトガル人が漂着。戦術に革命。' },
    { year: '1549年', event: 'キリスト教伝来', note: 'ザビエルが鹿児島に来航。南蛮貿易も盛ん。' },
    { year: '1560年', event: '桶狭間の戦い', note: '織田信長が今川義元を奇襲で破る。天下統一への第一歩。' },
    { year: '1573年', event: '室町幕府滅亡', note: '信長が15代将軍足利義昭を追放。' },
    { year: '1582年', event: '本能寺の変', note: '明智光秀が信長を討つ。天下統一は豊臣秀吉へ。' },
    { year: '1590年', event: '豊臣秀吉が天下統一', note: '小田原の北条氏を滅ぼし全国統一。太閤検地・刀狩令。' },
    { year: '1600年', event: '関ヶ原の戦い', note: '徳川家康（東軍）vs石田三成（西軍）。家康が天下を取る。' },
  ],
  '江戸': [
    { year: '1603年', event: '江戸幕府成立', note: '徳川家康が征夷大将軍に。参勤交代・武家諸法度で大名を統制。' },
    { year: '1635年', event: '参勤交代制度化', note: '大名は1年ごとに江戸と国元を往復。財政負担で反乱防止。' },
    { year: '1641年', event: '鎖国完成', note: 'オランダ・中国のみ長崎で貿易。キリスト教禁止。' },
    { year: '1716年', event: '享保の改革', note: '8代将軍吉宗が実施。目安箱設置・公事方御定書制定。' },
    { year: '1787年', event: '寛政の改革', note: '松平定信が実施。ロシア・外国船の接近が問題に。' },
    { year: '1841年', event: '天保の改革', note: '水野忠邦が実施。株仲間解散・上知令（失敗）。' },
    { year: '1853年', event: 'ペリー来航', note: '浦賀に黒船4隻。翌年、日米和親条約を締結。' },
    { year: '1858年', event: '日米修好通商条約', note: '不平等条約（領事裁判権・関税自主権なし）。攘夷運動高まる。' },
  ],
  '明治・大正': [
    { year: '1868年', event: '明治維新', note: '王政復古の大号令。五箇条の御誓文。廃藩置県（1871）。' },
    { year: '1872年', event: '学制・鉄道開通', note: '近代教育制度の始まり。新橋〜横浜間が開通。' },
    { year: '1877年', event: '西南戦争', note: '西郷隆盛の反乱。最後の士族反乱。' },
    { year: '1889年', event: '大日本帝国憲法発布', note: 'プロイセン（ドイツ）憲法を参考。天皇主権。伊藤博文が中心。' },
    { year: '1894年', event: '日清戦争', note: '朝鮮半島をめぐる争い。下関条約で台湾・遼東半島を獲得。' },
    { year: '1904年', event: '日露戦争', note: '満州・朝鮮をめぐる争い。ポーツマス条約で朝鮮の支配権。' },
    { year: '1910年', event: '韓国併合', note: '朝鮮を植民地に。1945年まで日本の支配が続く。' },
    { year: '1914年', event: '第一次世界大戦', note: '日本は連合国側で参戦。中国への二十一か条の要求。' },
    { year: '1925年', event: '普通選挙法・治安維持法', note: '25歳以上の男子に選挙権。社会主義運動を弾圧。' },
  ],
  '昭和・平成・令和': [
    { year: '1931年', event: '満州事変', note: '関東軍が満州を占領。軍部の台頭が始まる。' },
    { year: '1937年', event: '日中戦争', note: '盧溝橋事件をきっかけに全面戦争へ。' },
    { year: '1941年', event: '太平洋戦争', note: '真珠湾攻撃でアメリカと開戦。アジア・太平洋全域に戦線拡大。' },
    { year: '1945年', event: '終戦', note: '広島・長崎に原爆。ポツダム宣言受諾。8月15日に玉音放送。' },
    { year: '1946年', event: '日本国憲法公布', note: '国民主権・基本的人権の尊重・平和主義の三原則。' },
    { year: '1951年', event: 'サンフランシスコ平和条約', note: '独立を回復。日米安全保障条約も同時締結。' },
    { year: '1955〜73年', event: '高度経済成長', note: 'GDPが急増。東京オリンピック（1964）・大阪万博（1970）。' },
    { year: '1973年', event: 'オイルショック', note: '中東戦争で石油価格急騰。高度成長が終わる。' },
    { year: '1989年', event: '平成始まる・冷戦終結', note: 'ベルリンの壁崩壊。バブル経済が頂点に。' },
    { year: '1991年', event: 'バブル崩壊', note: '株価・地価が急落。「失われた10年」が始まる。' },
    { year: '2011年', event: '東日本大震災', note: '3月11日。マグニチュード9.0。津波・原発事故。' },
    { year: '2019年', event: '令和始まる', note: '5月1日に改元。令和=「Beautiful Harmony」。' },
  ],
};

export default function TimelineScreen() {
  const [selectedEra, setSelectedEra] = useState<Era>('明治・大正');

  const events = EVENTS[selectedEra];
  const eraInfo = ERAS.find((e) => e.key === selectedEra)!;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { backgroundColor: eraInfo.color }]}>
        <Text style={styles.headerEmoji}>{eraInfo.emoji}</Text>
        <View>
          <Text style={styles.headerTitle}>📅 歴史年表</Text>
          <Text style={styles.headerSub}>時代の流れを一覧で学ぶ</Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.eraScroll} contentContainerStyle={styles.eraScrollContent}>
        {ERAS.map((era) => (
          <TouchableOpacity
            key={era.key}
            style={[styles.eraChip, selectedEra === era.key && { backgroundColor: era.color }]}
            onPress={() => setSelectedEra(era.key)}
            activeOpacity={0.8}
          >
            <Text style={styles.eraChipEmoji}>{era.emoji}</Text>
            <Text style={[styles.eraChipText, selectedEra === era.key && styles.eraChipTextActive]} numberOfLines={1}>
              {era.key}
            </Text>
            <Text style={[styles.eraChipPeriod, selectedEra === era.key && { color: 'rgba(255,255,255,0.8)' }]}>
              {era.period}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={[styles.eraHeader, { backgroundColor: eraInfo.color + '22', borderColor: eraInfo.color }]}>
          <Text style={styles.eraHeaderEmoji}>{eraInfo.emoji}</Text>
          <View>
            <Text style={[styles.eraHeaderTitle, { color: eraInfo.color }]}>{eraInfo.key}</Text>
            <Text style={styles.eraHeaderPeriod}>{eraInfo.period}</Text>
          </View>
        </View>

        {events.map((ev, i) => (
          <View key={i} style={styles.eventRow}>
            <View style={[styles.eventDot, { backgroundColor: eraInfo.color }]} />
            <View style={[styles.eventLine, i === events.length - 1 && styles.eventLineHidden, { backgroundColor: eraInfo.color + '44' }]} />
            <View style={styles.eventCard}>
              <Text style={[styles.eventYear, { color: eraInfo.color }]}>{ev.year}</Text>
              <Text style={styles.eventTitle}>{ev.event}</Text>
              <Text style={styles.eventNote}>{ev.note}</Text>
            </View>
          </View>
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
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
  eraScroll: { flexGrow: 0, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#E5EAF0' },
  eraScrollContent: { padding: 10, gap: 8, flexDirection: 'row' },
  eraChip: {
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#F0F3F7',
    minWidth: 80,
  },
  eraChipEmoji: { fontSize: 18, marginBottom: 2 },
  eraChipText: { fontSize: 10, fontWeight: '700', color: '#444', textAlign: 'center' },
  eraChipTextActive: { color: '#FFFFFF' },
  eraChipPeriod: { fontSize: 9, color: '#888', marginTop: 2, textAlign: 'center' },
  scroll: { flex: 1 },
  content: { padding: 16 },
  eraHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 14,
    marginBottom: 20,
  },
  eraHeaderEmoji: { fontSize: 36 },
  eraHeaderTitle: { fontSize: 20, fontWeight: '900' },
  eraHeaderPeriod: { fontSize: 13, color: '#666', fontWeight: '500', marginTop: 2 },
  eventRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  eventDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginTop: 4,
    marginRight: 12,
    flexShrink: 0,
    zIndex: 2,
  },
  eventLine: {
    position: 'absolute',
    left: 6,
    top: 18,
    width: 2,
    bottom: -4,
    zIndex: 1,
  },
  eventLineHidden: { opacity: 0 },
  eventCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  eventYear: { fontSize: 12, fontWeight: '800', marginBottom: 4 },
  eventTitle: { fontSize: 16, fontWeight: '800', color: '#1A1A2E', marginBottom: 6 },
  eventNote: { fontSize: 13, color: '#555', lineHeight: 20, fontWeight: '400' },
});
