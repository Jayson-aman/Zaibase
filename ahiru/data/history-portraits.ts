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
  {
    person: 'ペリー',
    image: require('../assets/history-portraits/matthew-perry.png'),
    caption: 'アメリカ海軍提督マシュー・ペリー。1853年、黒船4隻で浦賀に来航した',
  },
  {
    person: '井伊直弼',
    image: require('../assets/history-portraits/ii-naosuke.jpg'),
    caption: '近江彦根藩主、江戸幕府大老。1858年に日米修好通商条約に調印し、安政の大獄で反対派を弾圧、翌々年の桜田門外の変で暗殺された',
  },
  {
    person: '西郷隆盛',
    image: require('../assets/history-portraits/saigo-takamori.jpg'),
    caption: '薩摩藩の下級藩士出身。1877年に西南戦争を起こした（本人の実際の写真は現存せず、これはイタリア人画家キヨッソーネが1883年に親族の証言などをもとに描いた合成画）',
  },
  {
    person: '伊藤博文',
    image: require('../assets/history-portraits/ito-hirobumi.jpg'),
    caption: '明治時代の政治家、初代内閣総理大臣。1889年に大日本帝国憲法の制定を主導した',
  },
  {
    person: '大久保利通',
    image: require('../assets/history-portraits/okubo-toshimichi.jpg'),
    caption: '旧薩摩藩士。西郷隆盛・木戸孝允と並ぶ「維新の三傑」の一人。1868年の明治維新以降、廃藩置県など中央集権化を主導した',
  },
  {
    person: '木戸孝允',
    image: require('../assets/history-portraits/kido-takayoshi.jpg'),
    caption: '長州藩士（幕末は桂小五郎と名乗る）。西郷隆盛・大久保利通と並ぶ「維新の三傑」の一人',
  },
  {
    person: '坂本龍馬',
    image: require('../assets/history-portraits/sakamoto-ryoma.jpg'),
    caption: '土佐藩の志士。対立していた薩摩藩・長州藩を結ぶ薩長同盟を仲介し、明治維新の土台を作った（1867年に暗殺された）',
  },
  {
    person: '東郷平八郎',
    image: require('../assets/history-portraits/togo-heihachiro.jpg'),
    caption: '海軍軍人、連合艦隊司令長官。1904年の日露戦争・日本海海戦でバルチック艦隊を破り完勝した（日清戦争でも「浪速」艦長として活躍）',
  },
  {
    person: '加藤高明',
    image: require('../assets/history-portraits/kato-takaaki.jpg'),
    caption: '外交官出身の政治家、内閣総理大臣。1925年に普通選挙法・治安維持法を成立させた',
  },
  {
    person: '明治天皇',
    image: require('../assets/history-portraits/meiji-tennou.jpg'),
    caption: '第122代天皇。倒幕・明治維新の象徴として近代日本を指導し、「大帝」とも称えられた',
  },
  {
    person: '吉田茂',
    image: require('../assets/history-portraits/yoshida-shigeru.jpg'),
    caption: '外交官出身の政治家、内閣総理大臣（第45・48〜51代）。1951年にサンフランシスコ平和条約に調印し独立を回復した',
  },
  {
    person: '徳仁天皇',
    image: require('../assets/history-portraits/naruhito-tennou.jpg'),
    caption: '第126代天皇。2019年5月1日に即位し、令和の時代が始まった',
  },
  {
    person: '平清盛',
    image: require('../assets/history-portraits/taira-no-kiyomori.jpg'),
    caption: '桓武天皇の子孫、平氏の棟梁。1167年に武士として初めて太政大臣になった',
  },
  {
    person: '坂上田村麻呂',
    image: require('../assets/history-portraits/sakanoue-no-tamuramaro.jpg'),
    caption: '桓武天皇に仕えた武官。797年に征夷大将軍となり、蝦夷を平定するため胆沢城を築いた',
  },
  {
    person: '板垣退助',
    image: require('../assets/history-portraits/itagaki-taisuke.jpg'),
    caption: '土佐藩士出身の政治家。1874年に民撰議院設立建白書を提出し、自由民権運動を広げた',
  },
  {
    person: '最澄',
    image: require('../assets/history-portraits/saicho.jpg'),
    caption: '伝教大師。804年に唐へ渡り、帰国後に比叡山延暦寺を建てて天台宗を開いた',
  },
  {
    person: '空海',
    image: require('../assets/history-portraits/kukai.jpg'),
    caption: '弘法大師。804年に唐へ渡り、帰国後に高野山金剛峯寺を建てて真言宗を開いた',
  },
  {
    person: '藤原純友',
    image: require('../assets/history-portraits/fujiwara-no-sumitomo.jpg'),
    caption: '後世の歌舞伎風の絵に描かれた藤原純友。939〜941年に瀬戸内海で反乱を起こした',
  },
  {
    person: '紫式部',
    image: require('../assets/history-portraits/murasaki-shikibu.jpg'),
    caption: '一条天皇の中宮彰子に仕えた女房。『源氏物語』の作者として有名（伝統的な絵姿）',
  },
  {
    person: '清少納言',
    image: require('../assets/history-portraits/sei-shonagon.jpg'),
    caption: '随筆『枕草子』の作者として有名（伝統的な絵姿）',
  },
  {
    person: '小野妹子',
    image: require('../assets/history-portraits/ono-no-imoko.jpg'),
    caption: '推古天皇の時代の官人。607年、遣隋使として聖徳太子の国書を隋の皇帝に届けた',
  },
  {
    person: '鑑真',
    image: require('../assets/history-portraits/ganjin.jpg'),
    caption: '唐招提寺の「鑑真和上坐像」。何度も渡航に失敗し失明しながらも753年に来日し、正しい戒律を伝えた',
  },
  {
    person: '上杉謙信',
    image: require('../assets/history-portraits/uesugi-kenshin.png'),
    caption: '越後の戦国大名（初名は長尾景虎）。1550年代、武田信玄と川中島の戦いを繰り返した',
  },
  {
    person: '武田信玄',
    image: require('../assets/history-portraits/takeda-shingen.jpg'),
    caption: '甲斐の戦国大名（初名は晴信）。1550年代、上杉謙信と川中島の戦いを繰り返した',
  },
  {
    person: '徳川綱吉',
    image: require('../assets/history-portraits/tokugawa-tsunayoshi.jpg'),
    caption: '江戸幕府第5代将軍。1685年に生類憐みの令を出し、湯島聖堂を建てるなど文治政治を進めた',
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
// timeline.ts の event または note 文字列に部分一致するもの
// （呼び出し側は `${ev.event} ${ev.note}` を渡す）。
export type HistoryEventImage = {
  /** timeline.ts の event または note 文字列に含まれる部分文字列 */
  eventMatch: string;
  image: ImageSourcePropType;
  caption?: string;
};

export const historyEventImages: HistoryEventImage[] = [
  {
    eventMatch: '川中島の戦い',
    image: require('../assets/history-portraits/kawanakajima-statue.jpg'),
    caption: '川中島古戦場に立つ上杉謙信・武田信玄の一騎討ち像',
  },
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
  {
    eventMatch: '浦賀に来航',
    image: require('../assets/history-portraits/perry-kurihama-landing.jpg'),
    caption: 'ペリー一行の久里浜上陸の様子を描いた版画',
  },
  {
    eventMatch: '桜田門外の変',
    image: require('../assets/history-portraits/sakuradamon-gaihen.webp'),
    caption: '桜田門外の変を描いた錦絵。井伊直弼が暗殺された事件',
  },
];

export function getEventImages(eventText?: string): HistoryEventImage[] {
  if (eventText == null) return [];
  return historyEventImages.filter((e) => eventText.includes(e.eventMatch));
}
