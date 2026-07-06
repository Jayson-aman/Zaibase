import React from 'react';
import LegalScreen from '../components/LegalScreen';
import { takkenPrivacy, PRIVACY_UPDATED } from '../data/legal';

export default function PrivacyScreen() {
  return (
    <LegalScreen
      title="プライバシーポリシー"
      updated={PRIVACY_UPDATED}
      sections={takkenPrivacy}
    />
  );
}
