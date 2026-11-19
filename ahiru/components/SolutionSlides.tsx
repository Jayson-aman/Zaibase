import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { QUESTION_SLIDES, LESSON_SLIDES, slideImageUrl } from '../data/solution-slides';

/**
 * 解説スライド（図解つきの説明画像）。折りたたんで出す。閉じたままなら1行だけ。
 * 問題ID（questionId）か単元ID（lessonId）に対応するスライドがあるときだけ出る。
 * 画像が読みこめなかったときは、何も出さない。
 */
export default function SolutionSlides({ questionId, lessonId, note }: { questionId?: string; lessonId?: string; note?: string }) {
  const files = (questionId != null ? QUESTION_SLIDES[questionId] : lessonId != null ? LESSON_SLIDES[lessonId] : undefined) ?? [];
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [bad, setBad] = useState(false);
  const { width } = useWindowDimensions();
  if (files.length === 0 || bad) return null;
  // 幅は上限をつけて丸める（Webで窓幅が少し変わっても全体の高さが変わらないように）
  const w = Math.round(Math.min(width - 56, 640) / 16) * 16;
  const h = Math.round((w * 562) / 1000);
  const i = Math.min(idx, files.length - 1);
  return (
    <View style={styles.wrap}>
      <TouchableOpacity onPress={() => setOpen(!open)} accessibilityRole="button">
        <Text style={styles.title}>{open ? '▼' : '▶'} 🖼 スライドで説明を見る（{files.length}枚）</Text>
      </TouchableOpacity>
      {open && (
        <View>
          {note != null && <Text style={styles.note}>{note}</Text>}
          <Image
            source={{ uri: slideImageUrl(files[i], Platform.OS === 'web') }}
            style={{ width: w, height: h, alignSelf: 'center', backgroundColor: '#f1f5fb' }}
            resizeMode="contain"
            accessibilityLabel="解説スライド"
            onError={() => setBad(true)}
          />
          {files.length > 1 && (
            <View style={styles.nav}>
              <TouchableOpacity disabled={i === 0} onPress={() => setIdx(i - 1)} style={[styles.btn, i === 0 && styles.btnOff]}>
                <Text style={styles.btnText}>← 前へ</Text>
              </TouchableOpacity>
              <Text style={styles.count}>{i + 1} / {files.length}</Text>
              <TouchableOpacity disabled={i === files.length - 1} onPress={() => setIdx(i + 1)} style={[styles.btn, i === files.length - 1 && styles.btnOff]}>
                <Text style={styles.btnText}>次へ →</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginTop: 10, padding: 10, borderRadius: 12, backgroundColor: '#eef4ff', borderWidth: 1, borderColor: '#cfe0ff' },
  title: { fontSize: 15, fontWeight: '800', color: '#1d4ed8' },
  note: { fontSize: 12, color: '#64748b', marginTop: 6, marginBottom: 4 },
  nav: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 },
  btn: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 10, backgroundColor: '#2563eb' },
  btnOff: { backgroundColor: '#cbd5e1' },
  btnText: { color: '#fff', fontWeight: '800', fontSize: 14 },
  count: { fontSize: 14, color: '#475569', fontWeight: '700' },
});
