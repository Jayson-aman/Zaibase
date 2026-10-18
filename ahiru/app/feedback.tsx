import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import FeedbackForm from '../components/FeedbackForm';

export default function FeedbackScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← もどる</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>ご意見・ご要望</Text>
          <Text style={styles.headerSubtitle}>
            全ての科目・中学受験/高校受験について、わからないこと・こうしてほしいことを教えてください
          </Text>
        </View>
        <View style={styles.formWrap}>
          <FeedbackForm onDone={() => router.back()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FAF7F2' },
  scrollContent: { paddingBottom: 40 },
  header: {
    backgroundColor: '#6B4226',
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  backBtn: { marginBottom: 12, alignSelf: 'flex-start' },
  backBtnText: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#FFFFFF', marginBottom: 6 },
  headerSubtitle: { fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 20 },
  formWrap: { padding: 20 },
});
