import React from 'react';
import LegalScreen from '../components/LegalScreen';
import { ahiruTokusho, TOKUSHO_UPDATED } from '../data/legal';

export default function TokushoScreen() {
  return (
    <LegalScreen
      title="特定商取引法に基づく表示"
      updated={TOKUSHO_UPDATED}
      sections={ahiruTokusho}
    />
  );
}
