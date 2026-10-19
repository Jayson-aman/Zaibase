import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

// 「基礎 → いつもの教科書・問題集（Pro）→ できなければ基礎へ」をつなぐ案内。
//
// 定期テストの基本問題（teiki）で8割とれたら、つぎは既存の問題集の基礎→標準へ進む。
// 既存の問題集で6割に届かなかったら、基礎（定期テストの教科書・基本問題）にもどす。
// 6〜8割のあいだは、いまの段階でもう一度やるよう勧める。
export type LadderFrom = 'teiki' | 'basic' | 'standard';

export default function LadderCard({
  pct,
  from,
  subject,
  grade,
  onRetry,
}: {
  pct: number;
  from: LadderFrom;
  subject: string;
  grade?: string | null;
  onRetry?: () => void;
}) {
  const router = useRouter();
  const g = grade ? `&grade=${grade}` : '';
  const toBasics = () => router.push(`/teiki?subject=${subject}${g}` as any);
  const toQuiz = (difficulty: 'basic' | 'standard') =>
    router.push(`/quiz/${subject}?examType=koko&difficulty=${difficulty}${g}` as any);

  let title: string;
  let body: string;
  let primary: { label: string; onPress: () => void } | null = null;
  let secondary: { label: string; onPress: () => void } | null = null;

  if (pct >= 80) {
    if (from === 'teiki') {
      title = '🌟 よくできました。つぎへ進んでみよう';
      body = 'いつもの問題集の、やさしい問題に進みます。むずかしいと感じたら、いつでもここにもどれます。';
      primary = { label: 'やさしい問題集へ進む', onPress: () => toQuiz('basic') };
    } else if (from === 'basic') {
      title = '🌟 できたね。つぎは少しだけ上へ';
      body = 'やさしい問題で8割以上とれました。つぎは「ふつう」のレベルに進んでみましょう。';
      primary = { label: '「ふつう」の問題へ進む', onPress: () => toQuiz('standard') };
    } else {
      title = '🏆 「ふつう」もよくできています';
      body = 'このまま応用や、ほかの単元に進んでだいじょうぶです。';
    }
  } else if (pct >= 60) {
    title = '👍 あと少し。もう一回、ゆっくりやってみよう';
    body = 'まちがえた所を見直して、同じところでもう一度やると、身についてきます。';
    if (onRetry) primary = { label: 'もう一度やる', onPress: onRetry };
    secondary = { label: '動く図解を見直す', onPress: toBasics };
  } else {
    title = '📘 ゆっくり、基礎にもどろう';
    body = 'つまずいた所は、動く図解とやさしい問題で、ゆっくりおさらいしよう。もどっても全然だいじょうぶ。';
    primary = { label: '動く図解とやさしい問題へ', onPress: toBasics };
    if (onRetry) secondary = { label: 'もう一度やる', onPress: onRetry };
  }

  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <View style={styles.row}>
        {primary && (
          <TouchableOpacity style={styles.btn} onPress={primary.onPress} activeOpacity={0.85}>
            <Text style={styles.btnText}>{primary.label}</Text>
          </TouchableOpacity>
        )}
        {secondary && (
          <TouchableOpacity style={styles.btn2} onPress={secondary.onPress} activeOpacity={0.85}>
            <Text style={styles.btn2Text}>{secondary.label}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { backgroundColor: '#FFF8EC', borderRadius: 14, borderWidth: 1.5, borderColor: '#F2D48A', padding: 14, marginTop: 14 },
  title: { fontSize: 15, fontWeight: '800', color: '#7A5A12' },
  body: { fontSize: 13, lineHeight: 20, color: '#4A4036', marginTop: 4 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 10 },
  btn: { backgroundColor: '#B5622E', borderRadius: 22, paddingHorizontal: 18, paddingVertical: 10 },
  btnText: { color: '#fff', fontWeight: '800', fontSize: 13 },
  btn2: { borderRadius: 22, paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1.5, borderColor: '#B5622E' },
  btn2Text: { color: '#B5622E', fontWeight: '800', fontSize: 13 },
});
