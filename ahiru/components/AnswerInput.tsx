import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import type { Question } from '../data/questions-meta';
import { answerMode, judge, reviewWriting, diffHint } from '../utils/grading';

// ───────────────────────────────────────────────────────────────
// 答えを自分で書いてもらう欄。
//
// これまでは答えを見てから「✓正解 / ✗不正解」を自分で押す作りだった。
// それだと答えを見てから判断することになり、本当に解けたのかが分からない。
// 先に自分の答えを書いてもらい、機械が採点する。
//
// ・短い答え（7,725問）… その場で正誤を判定する。合っていれば花火。
// ・長い記述（4,312問）… 正誤は機械で決められないので、模範解答と見くらべる。
//   ○×はつけず、「書けていた言葉」と「入れたかった言葉」を色分けして見せる。
// ───────────────────────────────────────────────────────────────

export type SubmitResult = {
  /** 子どもが書いた答え */
  input: string;
  /** 採点の結果。記述は 'review'（正誤をつけない） */
  result: 'correct' | 'wrong' | 'review';
};

type Props = {
  question: Question;
  onSubmit: (r: SubmitResult) => void;
  /** 採点ずみのときは、書いた答えと添削を出したまま入力を閉じる */
  submitted?: SubmitResult | null;
};

export default function AnswerInput({ question, onSubmit, submitted }: Props) {
  const [text, setText] = useState('');
  const mode = answerMode(question);
  const isWriting = mode === 'writing';

  function handleSubmit() {
    const input = text.trim();
    if (!input) return;
    const result = isWriting ? 'review' : (judge(input, question.answer) as 'correct' | 'wrong');
    onSubmit({ input, result });
  }

  // ── 採点したあと：書いた答えと添削を見せる ──
  if (submitted != null) {
    const { hit, miss } = isWriting
      ? reviewWriting(submitted.input, question.answer)
      : { hit: [], miss: [] };
    const hint = submitted.result === 'wrong' ? diffHint(submitted.input, question.answer) : null;
    return (
      <View style={styles.wrap}>
        <Text style={styles.label}>あなたの答え</Text>
        <View
          style={[
            styles.yourAnswerBox,
            submitted.result === 'correct' && styles.yourAnswerCorrect,
            submitted.result === 'wrong' && styles.yourAnswerWrong,
          ]}
        >
          <Text style={styles.yourAnswerText}>{submitted.input}</Text>
        </View>

        {submitted.result === 'correct' && (
          <Text style={styles.correctLine}>よくできました！ぴったり合っています。</Text>
        )}

        {hint != null && (
          <View style={styles.hintBox}>
            <Text style={styles.hintText}>{hint}</Text>
          </View>
        )}

        {isWriting && (
          <View style={styles.reviewBox}>
            <Text style={styles.reviewTitle}>じぶんで見くらべてみよう</Text>
            <Text style={styles.reviewNote}>
              記述の答えは、書き方がちがっても正しいことがあります。模範解答とくらべて、
              足りないところをおぎなってみましょう。
            </Text>
            {hit.length > 0 && (
              <View style={styles.chipRow}>
                <Text style={styles.chipLabel}>書けていた言葉</Text>
                <View style={styles.chips}>
                  {hit.map((w) => (
                    <Text key={w} style={[styles.chip, styles.chipHit]}>
                      {w}
                    </Text>
                  ))}
                </View>
              </View>
            )}
            {miss.length > 0 && (
              <View style={styles.chipRow}>
                <Text style={styles.chipLabel}>入れたかった言葉</Text>
                <View style={styles.chips}>
                  {miss.map((w) => (
                    <Text key={w} style={[styles.chip, styles.chipMiss]}>
                      {w}
                    </Text>
                  ))}
                </View>
              </View>
            )}
          </View>
        )}
      </View>
    );
  }

  // ── 採点する前：答えを書いてもらう ──
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>
        {isWriting ? '答えを書いてみよう（文で答える問題）' : '答えを書いてみよう'}
      </Text>
      <TextInput
        style={[styles.input, isWriting && styles.inputTall]}
        value={text}
        onChangeText={setText}
        placeholder={isWriting ? 'ここに自分の言葉で書いてね' : 'ここに答えを書いてね'}
        placeholderTextColor="#94A3B8"
        multiline={isWriting}
        numberOfLines={isWriting ? 5 : 1}
        textAlignVertical={isWriting ? 'top' : 'center'}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType={isWriting ? 'default' : 'done'}
        onSubmitEditing={isWriting ? undefined : handleSubmit}
        blurOnSubmit={!isWriting}
      />
      <TouchableOpacity
        style={[styles.submitBtn, !text.trim() && styles.submitBtnOff]}
        onPress={handleSubmit}
        disabled={!text.trim()}
        activeOpacity={0.85}
      >
        <Text style={styles.submitBtnText}>答え合わせ</Text>
      </TouchableOpacity>
      <Text style={styles.note}>
        {isWriting
          ? '書いたあとに模範解答が出ます。見くらべて、自分で直してみましょう。'
          : '単位はつけてもつけなくても大丈夫。全角でも半角でもかまいません。'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 16,
    marginTop: 14,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0369A1',
    marginBottom: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: '#BAE6FD',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 18,
    color: '#0F172A',
    backgroundColor: '#F8FAFC',
  },
  inputTall: {
    minHeight: 120,
    fontSize: 16,
    lineHeight: 24,
  },
  submitBtn: {
    marginTop: 12,
    backgroundColor: '#0EA5E9',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  submitBtnOff: {
    backgroundColor: '#CBD5E1',
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  note: {
    marginTop: 8,
    fontSize: 12,
    color: '#64748B',
    lineHeight: 18,
  },
  yourAnswerBox: {
    borderWidth: 2,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: '#F8FAFC',
  },
  yourAnswerCorrect: {
    borderColor: '#22C55E',
    backgroundColor: '#F0FDF4',
  },
  yourAnswerWrong: {
    borderColor: '#F59E0B',
    backgroundColor: '#FFFBEB',
  },
  yourAnswerText: {
    fontSize: 18,
    color: '#0F172A',
    lineHeight: 26,
  },
  correctLine: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '700',
    color: '#15803D',
  },
  hintBox: {
    marginTop: 10,
    padding: 12,
    backgroundColor: '#FFFBEB',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
  },
  hintText: {
    fontSize: 14,
    color: '#92400E',
    lineHeight: 21,
  },
  reviewBox: {
    marginTop: 12,
    padding: 12,
    backgroundColor: '#F0F9FF',
    borderRadius: 10,
  },
  reviewTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0369A1',
    marginBottom: 6,
  },
  reviewNote: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
    marginBottom: 10,
  },
  chipRow: {
    marginTop: 6,
  },
  chipLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 4,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    fontSize: 13,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    marginRight: 6,
    marginBottom: 6,
    overflow: 'hidden',
  },
  chipHit: {
    backgroundColor: '#DCFCE7',
    color: '#15803D',
  },
  chipMiss: {
    backgroundColor: '#FEE2E2',
    color: '#B91C1C',
  },
});
