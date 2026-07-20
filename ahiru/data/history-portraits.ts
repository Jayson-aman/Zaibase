import { ImageSourcePropType } from 'react-native';

// 歴史年表（data/timeline.ts）の person フィールドに対応する肖像画・写真。
// person フィールドは「中大兄皇子・中臣鎌足」のように複数人が「・」区切りで
// 入ることがあるため、getPortraitForPerson は部分一致で検索する。
export type HistoryPortrait = {
  /** timeline.ts の person 文字列に含まれる人物名（完全一致の部分文字列） */
  person: string;
  image: ImageSourcePropType;
  /** 出典・注記（例：伝統的な肖像画／本人と断定はできない　など） */
  caption?: string;
};

export const historyPortraits: HistoryPortrait[] = [
  {
    person: '中臣鎌足',
    image: require('../assets/history-portraits/nakatomi-no-kamatari.jpg'),
    caption: '伝統的な肖像画（藤原氏の祖・大化の改新の中心人物）',
  },
  {
    person: '聖徳太子',
    image: require('../assets/history-portraits/shotoku-taishi.jpg'),
    caption: '唐本御影（伝聖徳太子像）。近年は本人ではないとの説もある伝統的な肖像画',
  },
  {
    person: '中大兄皇子',
    image: require('../assets/history-portraits/nakanooe-no-oji.jpg'),
    caption: 'のちの天智天皇。大化の改新で中臣鎌足とともに蘇我氏を倒した',
  },
  {
    person: '元明天皇',
    image: require('../assets/history-portraits/genmei-tennou.jpg'),
    caption: '第43代天皇（女帝）。天智天皇の皇女。710年に平城京へ遷都した',
  },
  {
    person: '聖武天皇',
    image: require('../assets/history-portraits/shomu-tennou.jpg'),
    caption: '天平年間の災害・疫病（天然痘）を機に仏教に深く帰依し、国分寺建立・東大寺大仏造立を発願した',
  },
  {
    person: '桓武天皇',
    image: require('../assets/history-portraits/kanmu-tennou.jpg'),
    caption: '光仁天皇の子（山部親王）。794年に平安京へ遷都した',
  },
  {
    person: '菅原道真',
    image: require('../assets/history-portraits/sugawara-no-michizane.jpg'),
    caption: '平安前期の学者・政治家。894年に遣唐使の廃止を建議した',
  },
  {
    person: '藤原道長',
    image: require('../assets/history-portraits/fujiwara-no-michinaga.jpg'),
    caption: '藤原兼家の五男。1016年に摂政となり、摂関政治の全盛期を築いた',
  },
  {
    person: '白河上皇',
    image: require('../assets/history-portraits/shirakawa-tennou.jpg'),
    caption: '第72代天皇（白河天皇）。譲位後の1086年に院政を始めた',
  },
  {
    person: '源義経',
    image: require('../assets/history-portraits/minamoto-no-yoshitsune.jpg'),
    caption: '源頼朝の異母弟。1185年、壇ノ浦の戦いで平氏を滅ぼした',
  },
  {
    person: '源頼朝',
    image: require('../assets/history-portraits/minamoto-no-yoritomo.jpg'),
    caption: '「神護寺三像」の一つと伝わる肖像画。1192年に征夷大将軍となり鎌倉幕府を開いた（本人かは学説上の議論もある）',
  },
  {
    person: '後鳥羽上皇',
    image: require('../assets/history-portraits/gotoba-jokou.jpg'),
    caption: '新古今和歌集の編纂でも知られる。1221年、承久の乱で北条義時追討の兵を挙げるも敗れ隠岐に配流された',
  },
  {
    person: '北条泰時',
    image: require('../assets/history-portraits/hojo-yasutoki.jpg'),
    caption: '鎌倉幕府第3代執権。1232年、武家法の基本となる御成敗式目を制定した',
  },
  {
    person: 'フビライ',
    image: require('../assets/history-portraits/kublai-khan.jpg'),
    caption: '元（モンゴル帝国）の皇帝。1274年・1281年の2度、日本に元寇を仕掛けた',
  },
  {
    person: '後醍醐天皇',
    image: require('../assets/history-portraits/godaigo-tennou.jpg'),
    caption: '第96代天皇。1333年、倒幕運動により鎌倉幕府を滅ぼした',
  },
  {
    person: '楠木正成',
    image: require('../assets/history-portraits/kusunoki-masashige.jpg'),
    caption: '鎌倉時代末期の武将。後醍醐天皇に味方し、ゲリラ戦で幕府軍を苦しめた',
  },
  {
    person: '足利尊氏',
    image: require('../assets/history-portraits/ashikaga-takauji.jpg'),
    caption: '有名な「騎馬武者像」。1338年に室町幕府を開いた（近年は高師直を描いたものとの説もある）',
  },
  {
    person: '足利義満',
    image: require('../assets/history-portraits/ashikaga-yoshimitsu.jpg'),
    caption: '足利尊氏の孫、室町幕府第3代将軍。1404年に日明貿易（勘合貿易）を始めた',
  },
  {
    person: '北条義時',
    image: require('../assets/history-portraits/hojo-yoshitoki.png'),
    caption: '鎌倉幕府第2代執権。北条政子の弟。1221年、承久の乱で後鳥羽上皇方を破った',
  },
  {
    person: 'フランシスコ・ザビエル',
    image: require('../assets/history-portraits/francisco-xavier.jpg'),
    caption: 'カトリック教会の宣教師。1549年、鹿児島に来航し日本に初めてキリスト教を伝えた',
  },
  {
    person: '織田信長',
    image: require('../assets/history-portraits/oda-nobunaga.jpg'),
    caption: '長興寺蔵の肖像画。戦国の三英傑の一人。1560年桶狭間の戦い・1573年室町幕府滅亡で有名',
  },
  {
    person: '今川義元',
    image: require('../assets/history-portraits/imagawa-yoshimoto.jpg'),
    caption: '駿河の戦国大名。1560年、2万5千の大軍で尾張に侵攻するも桶狭間で織田信長に討たれた',
  },
  {
    person: '明智光秀',
    image: require('../assets/history-portraits/akechi-mitsuhide.jpg'),
    caption: '土岐氏の流れを汲む武将。1582年、本能寺の変で主君・織田信長を討った',
  },
  {
    person: '豊臣秀吉',
    image: require('../assets/history-portraits/toyotomi-hideyoshi.png'),
    caption: '戦国の三英傑の一人、初代武家関白・太閤。1590年に天下統一を果たした',
  },
  {
    person: '徳川家康',
    image: require('../assets/history-portraits/tokugawa-ieyasu.jpg'),
    caption: '戦国の三英傑の一人。1600年に関ヶ原の戦いに勝利し、1603年に江戸幕府を開いた',
  },
  {
    person: '徳川家光',
    image: require('../assets/history-portraits/tokugawa-iemitsu.jpg'),
    caption: '江戸幕府第3代将軍。1635年に参勤交代を制度化し、1641年に鎖国を完成させた',
  },
  {
    person: '柳生宗矩',
    image: require('../assets/history-portraits/yagyu-munenori.jpg'),
    caption: '徳川将軍家の兵法指南役。柳生新陰流を将軍家御流儀とし、1636年に大名となった',
  },
  {
    person: '徳川吉宗',
    image: require('../assets/history-portraits/tokugawa-yoshimune.jpg'),
    caption: '和歌山藩主から江戸幕府第8代将軍に。家康の曽孫で「幕府中興の祖」とも呼ばれ、1716年に享保の改革（目安箱・公事方御定書）を行った',
  },
  {
    person: '松平定信',
    image: require('../assets/history-portraits/matsudaira-sadanobu.jpg'),
    caption: '陸奥白河藩主、老中。徳川吉宗の孫。1787年に寛政の改革を行った（画像は本人による自画像）',
  },
  {
    person: '水野忠邦',
    image: require('../assets/history-portraits/mizuno-tadakuni.jpg'),
    caption: '肥前唐津藩主、のち遠江浜松藩主。江戸幕府老中。1841年に天保の改革を行った',
  },
];

/** 1人の肖像画だけが欲しいとき（最初の一致） */
export function getPortraitForPerson(personField?: string): HistoryPortrait | null {
  const list = getPortraitsForPerson(personField);
  return list[0] ?? null;
}

/** person フィールドに複数人（「・」区切り）が含まれる場合、一致した全員分を返す */
export function getPortraitsForPerson(personField?: string): HistoryPortrait[] {
  if (personField == null) return [];
  return historyPortraits.filter((p) => personField.includes(p.person));
}

// できごと自体を写した写真（人物の肖像ではない：建造物・仏像など）。
// timeline.ts の event 文字列に部分一致するもの。
export type HistoryEventImage = {
  /** timeline.ts の event 文字列に含まれる部分文字列 */
  eventMatch: string;
  image: ImageSourcePropType;
  caption?: string;
};

export const historyEventImages: HistoryEventImage[] = [
  {
    eventMatch: '東大寺の大仏',
    image: require('../assets/history-portraits/todaiji-daibutsu.jpg'),
    caption: '東大寺盧舎那仏像（現在の姿）。聖武天皇の発願により造立された',
  },
  {
    eventMatch: '平城京に遷都',
    image: require('../assets/history-portraits/heijokyo-daigokuden.jpg'),
    caption: '平城宮 大極殿・大極門（復元）。当時の宮殿の姿を伝える',
  },
  {
    eventMatch: '壇ノ浦の戦い',
    image: require('../assets/history-portraits/dannoura-battle.jpg'),
    caption: '壇ノ浦の戦いを描いた合戦図。源氏と平氏の最後の海戦',
  },
  {
    eventMatch: '承久の乱',
    image: require('../assets/history-portraits/jokyu-no-ran.jpg'),
    caption: '承久の乱を描いた合戦図。後鳥羽上皇方と鎌倉幕府方が戦った',
  },
  {
    eventMatch: '元寇',
    image: require('../assets/history-portraits/genko-mongol-invasion.jpg'),
    caption: '「蒙古襲来絵詞」。元軍と戦う日本の武士を描いた絵巻',
  },
  {
    eventMatch: '日明貿易',
    image: require('../assets/history-portraits/kangoufu-tally.jpg'),
    caption: '実際に使われた勘合符。倭寇や密貿易と区別するための証明書',
  },
  {
    eventMatch: '桶狭間の戦い',
    image: require('../assets/history-portraits/okehazama-battle.jpg'),
    caption: '桶狭間の戦いを描いた浮世絵',
  },
  {
    eventMatch: '桶狭間の戦い',
    image: require('../assets/history-portraits/okehazama-battlefield-site.jpg'),
    caption: '桶狭間古戦場（現在の様子）',
  },
  {
    eventMatch: '本能寺の変',
    image: require('../assets/history-portraits/honnoji-no-hen.jpg'),
    caption: '本能寺の変を描いた浮世絵',
  },
];

export function getEventImages(eventText?: string): HistoryEventImage[] {
  if (eventText == null) return [];
  return historyEventImages.filter((e) => eventText.includes(e.eventMatch));
}
