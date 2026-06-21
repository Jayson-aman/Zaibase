import React from 'react';
import LegalScreen from '../components/LegalScreen';
import { ahiruTerms, TERMS_UPDATED } from '../data/legal';

export default function TermsScreen() {
  return (
    <LegalScreen title="利用規約" updated={TERMS_UPDATED} sections={ahiruTerms} />
  );
}
