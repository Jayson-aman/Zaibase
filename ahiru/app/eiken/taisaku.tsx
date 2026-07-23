import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

type GuideSection = { id: string; emoji: string; title: string; body: string };

const SECTIONS: GuideSection[] = [
  {
    id: 'writing2',
    emoji: '✍️',
    title: '2級 ライティング対策（英作文・要約）',
    body: `2級の一次試験には英作文（意見論述）と要約問題があります。配点比重が高く、ここで差がつきます。

━━━━━━━━━━━━━━━━━━━━━━
🔑 意見論述（80〜100語）の型
━━━━━━━━━━━━━━━━━━━━━━
【図解】4段落テンプレート
　①主張：I think that 〜（TOPICの言い換え＋自分の立場）
　②理由1：First, 〜（＋具体例1文）
　③理由2：Second, 〜（＋具体例1文）
　④結論：For these reasons, I think that 〜

・POINTS（観点語）を必ず2つ使う
・理由は「抽象→具体」の2文セットで書く
・スペルより「構成・一貫性」が採点の中心

━━━━━━━━━━━━━━━━━━━━━━
🔑 使える定型表現
━━━━━━━━━━━━━━━━━━━━━━
・主張：I believe / In my opinion,
・理由：This is because / One reason is that
・例示：For example, / For instance,
・追加：In addition, / Moreover,
・結論：Therefore, / For these reasons,

━━━━━━━━━━━━━━━━━━━━━━
🔑 要約問題（2024年度から導入）
━━━━━━━━━━━━━━━━━━━━━━
・英文（150語程度）を45〜55語に要約
・各段落の主旨を1文ずつ→接続詞でつなぐ
・本文の語句をそのまま写しすぎない（言い換えが評価される）
　例：buy → purchase、important → essential`,
  },
  {
    id: 'interview2',
    emoji: '🎤',
    title: '2級 二次試験（面接）対策',
    body: `2級の面接は「音読＋4つの質問」。パッセージとイラストを使う形式です。

━━━━━━━━━━━━━━━━━━━━━━
🔑 試験の流れ（約7分）
━━━━━━━━━━━━━━━━━━━━━━
【図解】面接のフロー
　入室・挨拶→カード受取り
　→20秒黙読→音読
　→No.1：パッセージについての質問
　→No.2：3コマイラストの展開説明（ナレーション）
	 →No.3・4：受験者自身の意見（カードを伏せて）
　→カード返却・退室

━━━━━━━━━━━━━━━━━━━━━━
🔑 設問別の攻略
━━━━━━━━━━━━━━━━━━━━━━
・音読：意味のかたまりで区切り、キーワードを強く読む
・No.1：答えは必ずパッセージ内にある。According to the passage, で始めると型が安定
・No.2：1コマ2文×3コマ。時制は過去形で統一し、
　吹き出し・矢印の変化を必ず言葉にする
・No.3/4：I think so. だけで終わらせず、
　「意見＋理由2文」（約3文）で答える

━━━━━━━━━━━━━━━━━━━━━━
🔑 アティチュード（態度点）
━━━━━━━━━━━━━━━━━━━━━━
・アイコンタクト、聞き返しは "I beg your pardon?" でOK（減点なし）
・沈黙が最大の敵：つなぎ言葉 Well, / Let me see, を使う`,
  },
  {
    id: 'interview3',
    emoji: '🗣️',
    title: '3級 二次試験（面接）対策',
    body: `3級から面接が始まります。「音読＋5つの質問」のシンプルな形式で、正しい型を覚えれば確実に合格点に届きます。

━━━━━━━━━━━━━━━━━━━━━━
🔑 試験の流れ（約5分）
━━━━━━━━━━━━━━━━━━━━━━
【図解】面接のフロー
　入室→挨拶・氏名確認→カード受取り
　→20秒黙読→音読
　→No.1：パッセージの内容質問
　→No.2・3：イラストの中の人物・物の質問
	 →No.4・5：受験者自身のこと（カードを伏せて）

━━━━━━━━━━━━━━━━━━━━━━
🔑 設問別の答え方の型
━━━━━━━━━━━━━━━━━━━━━━
・No.1：質問の主語＋動詞を使って本文から抜き出す
　Why…? → Because 〜. ／ What…? → 主語+動詞〜.
・No.2/3：現在進行形で答える
　A boy is playing soccer. / There are two cups on the table.
・No.4/5：自分のことを2文で
　I like watching movies. I usually watch them on weekends.

━━━━━━━━━━━━━━━━━━━━━━
🔑 よく出る質問パターン（No.4/5）
━━━━━━━━━━━━━━━━━━━━━━
・What do you like to do in your free time?
・Do you like ～? → Yes, I do. + 1文追加
・What are you going to do this weekend?
　→ I'm going to ～. で答える`,
  },
  {
    id: 'speaking4',
    emoji: '🎧',
    title: '4級 スピーキングテスト・学習法',
    body: `4級の合否は一次試験（筆記＋リスニング）で決まり、スピーキングテストは任意受験（合否に影響なし・別途「合格」判定がもらえる）です。

━━━━━━━━━━━━━━━━━━━━━━
🔑 スピーキングテスト（自宅受験）
━━━━━━━━━━━━━━━━━━━━━━
・パソコン・スマホで録音式で受験
・音読＋パッセージについて2問＋自分について2問
・3級面接の練習として受けておく価値が大きい

━━━━━━━━━━━━━━━━━━━━━━
🔑 4級学習の優先順位
━━━━━━━━━━━━━━━━━━━━━━
【図解】得点配分と対策
　語彙・熟語（15問）→ 本アプリの語彙問題で反復★
　会話文（5問）→ 決まり文句を暗記
	 並べかえ（5問）→ 基本文型 SVO/SVC
	 長文（10問）→ 掲示・Eメールの形式に慣れる
	 リスニング（30問）→ 毎日10分・同じ音源を2回聞く

━━━━━━━━━━━━━━━━━━━━━━
🔑 頻出の会話定型表現
━━━━━━━━━━━━━━━━━━━━━━
・Can I ～?（〜してもいい？）→ Sure. / Sorry, you can't.
・Would you like ～?（〜はいかが？）→ Yes, please.
・How about ～?（〜はどう？）
・Whose bag is this? → It's mine.`,
  },
  {
    id: 'grammar',
    emoji: '📖',
    title: '級別・最重要文法テキスト',
    body: `各級で「これが出る」文法をまとめました。問題演習の前後に読むと定着が速くなります。

━━━━━━━━━━━━━━━━━━━━━━
🔑 4級の柱（中1〜中2前半）
━━━━━━━━━━━━━━━━━━━━━━
・一般動詞の過去形（不規則動詞：go→went, see→saw）
・進行形：be + 〜ing（now とセット）
・未来：will / be going to
・助動詞：can / must / have to
・比較：taller than / the tallest / as tall as

━━━━━━━━━━━━━━━━━━━━━━
🔑 3級の柱（中2後半〜中3）
━━━━━━━━━━━━━━━━━━━━━━
・受動態：be + 過去分詞（by 〜）
・現在完了：have + 過去分詞
　【図解】3用法の見分け方
　　経験：ever / never / 〜 times
　　継続：for / since
　　完了：just / already / yet
・不定詞の3用法／動名詞（enjoy -ing, finish -ing）
・関係代名詞：who / which / that

━━━━━━━━━━━━━━━━━━━━━━
🔑 2級の柱（高校範囲）
━━━━━━━━━━━━━━━━━━━━━━
・仮定法過去：If I were you, I would 〜
・分詞構文：Walking down the street, I met her.
・関係副詞：where / when ／ 複合関係詞 whatever
・使役動詞：make / let / have + 人 + 動詞の原形
・重要熟語：turn out / carry out / come up with /
　in terms of / regardless of / on behalf of`,
  },
];

export default function EikenTaisakuScreen() {
  const router = useRouter();
  const [openId, setOpenId] = React.useState<string | null>(SECTIONS[0].id);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.back}>← 戻る</Text></TouchableOpacity>
        <Text style={styles.title}>🎯 英検 二次・ライティング対策</Text>
        <Text style={styles.sub}>面接の流れ・解答の型・級別重要文法</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {SECTIONS.map((s, i) => {
          const open = openId === s.id;
          return (
            <View key={s.id} style={styles.card}>
              <TouchableOpacity style={styles.cardHeader} onPress={() => setOpenId(open ? null : s.id)} activeOpacity={0.8}>
                <View style={styles.num}><Text style={styles.numText}>{i + 1}</Text></View>
                <Text style={styles.cardTitle}>{s.emoji} {s.title}</Text>
                <Text style={styles.chevron}>{open ? '▾' : '▸'}</Text>
              </TouchableOpacity>
              {open && (
                <View style={styles.cardBody}>
                  <Text style={styles.bodyText}>{s.body}</Text>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { backgroundColor: '#4A0072', paddingHorizontal: 20, paddingVertical: 16 },
  back: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700', marginBottom: 8 },
  title: { fontSize: 18, fontWeight: '900', color: '#FFFFFF' },
  sub: { fontSize: 12, color: 'rgba(255,255,255,0.75)', fontWeight: '600', marginTop: 2 },
  content: { padding: 16, paddingBottom: 40 },
  card: {
    backgroundColor: '#FFFFFF', borderRadius: 16, marginBottom: 12, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 6, elevation: 3,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', padding: 16, gap: 12 },
  num: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: '#7B1FA2' },
  numText: { fontSize: 13, fontWeight: '900', color: '#FFFFFF' },
  cardTitle: { flex: 1, fontSize: 15, fontWeight: '800', color: '#1A1A2E' },
  chevron: { fontSize: 16, color: '#999', fontWeight: '700' },
  cardBody: { paddingHorizontal: 18, paddingBottom: 18, borderTopWidth: 1, borderTopColor: '#F0F0F0' },
  bodyText: { fontSize: 13.5, color: '#333', lineHeight: 24, fontWeight: '500', paddingTop: 12 },
});
