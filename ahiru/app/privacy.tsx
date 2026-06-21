import React from 'react';
import LegalScreen from '../components/LegalScreen';
import { ahiruPrivacy, PRIVACY_UPDATED } from '../data/legal';

export default function PrivacyScreen() {
  return (
    <LegalScreen
      title="プライバシーポリシー"
      updated={PRIVACY_UPDATED}
      sections={ahiruPrivacy}
    />
  );
}
