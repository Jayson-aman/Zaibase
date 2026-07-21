import React from 'react';
import LegalScreen from '../components/LegalScreen';
import { ahiruCredits, CREDITS_UPDATED } from '../data/legal';

export default function CreditsScreen() {
  return (
    <LegalScreen
      title="画像クレジット"
      updated={CREDITS_UPDATED}
      sections={ahiruCredits}
    />
  );
}
