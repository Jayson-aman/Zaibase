import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { rich } from './RichText';

function isCalcLine(line: string): boolean {
  return /[＝=→]/.test(line) && line.length <= 70 && !/^[・※]/.test(line);
}

export default function SlideBody({ text, color }: { text: string; color: string }) {
  const lines = text.split('\n');
  return (
    <View>
      {lines.map((line, i) => {
        const t = line.trim();
        if (t === '') return <View key={i} style={{ height: 6 }} />;
        if (isCalcLine(t)) {
          return (
            <View key={i} style={[styles.calc, { borderColor: color + '55' }]}>
              <Text style={[styles.calcText, { color }]}>{rich(t, { size: 17, color, bold: true })}</Text>
            </View>
          );
        }
        return (
          <Text key={i} style={styles.bodyText}>
            {rich(t, { size: 15.5, color: '#2B2420' })}
          </Text>
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({
  bodyText: { fontSize: 15.5, lineHeight: 26, color: '#2B2420', marginBottom: 2 },
  calc: { borderWidth: 1.5, borderRadius: 10, backgroundColor: '#FFFFFF', paddingVertical: 8, paddingHorizontal: 12, marginVertical: 4 },
  calcText: { fontSize: 17, lineHeight: 28, fontWeight: '800' },
});
