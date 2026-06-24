import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import GeographyExplorer from '../../components/GeographyExplorer';

export default function GeographyScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🌍 日本地理</Text>
        <Text style={styles.headerSub}>
          農業・漁業・林業・工業・商業 — 全分野を立体マップで学ぶ
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <GeographyExplorer />

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>💡 5つの産業分野</Text>
          <Text style={styles.tipText}>
            🌾 農業（稲作・畑作・畜産）{'\n'}
            🐟 漁業（沿岸・養殖）{'\n'}
            🌲 林業（木材）{'\n'}
            🏭 工業（中京＝トヨタ・名古屋）{'\n'}
            🏪 商業（東京・大阪のサービス業）
          </Text>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: {
    backgroundColor: '#F39C12',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSub: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '600',
    marginBottom: 6,
  },
  proBadge: {
    fontSize: 12,
    color: '#FFF',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    overflow: 'hidden',
    fontWeight: '700',
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  tipCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginTop: 8,
  },
  tipTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 10,
  },
  tipText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 24,
  },
});
