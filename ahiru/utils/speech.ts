import { Platform } from 'react-native';
import * as Speech from 'expo-speech';

const LANG_JA = 'ja-JP';
const LANG_EN = 'en-US';

let cancelToken = 0;

export function isWebSpeech(): boolean {
  return Platform.OS === 'web' && typeof window !== 'undefined' && 'speechSynthesis' in window;
}

/** iOS Safari requires a user gesture before speechSynthesis works. Call on tap. */
export function primeSpeech(): void {
  if (!isWebSpeech()) return;
  const syn = window.speechSynthesis;
  syn.resume();
  syn.getVoices();
  syn.onvoiceschanged = () => syn.getVoices();
}

/** Returns true when text is predominantly Latin/English characters. */
function isEnglishText(text: string): boolean {
  const letters = (text.match(/[A-Za-zぁ-ん一-龯]/g) ?? []).length;
  if (letters === 0) return false;
  const latin = (text.match(/[A-Za-z]/g) ?? []).length;
  return latin / letters > 0.55;
}

function pickVoice(lang: string): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  if (lang === LANG_EN) {
    // Prefer high-quality network voices, then any en-US, then en-*
    return (
      voices.find((v) => v.lang === 'en-US' && !v.localService) ??
      voices.find((v) => v.lang === 'en-US') ??
      voices.find((v) => v.lang.startsWith('en')) ??
      voices[0]
    );
  }
  return (
    voices.find((v) => v.lang === 'ja-JP') ??
    voices.find((v) => v.lang.startsWith('ja')) ??
    voices[0]
  );
}

export function stopSpeech(): void {
  cancelToken += 1;
  if (isWebSpeech()) {
    window.speechSynthesis.cancel();
  } else {
    Speech.stop();
  }
}

export function pauseSpeech(): void {
  if (isWebSpeech()) {
    window.speechSynthesis.pause();
  } else {
    Speech.pause();
  }
}

export function resumeSpeech(): void {
  if (isWebSpeech()) {
    window.speechSynthesis.resume();
  } else {
    Speech.resume();
  }
}

export type SpeakOptions = {
  rate?: number;
  /** Override language detection. 'auto' (default) detects from text content. */
  lang?: 'auto' | 'ja-JP' | 'en-US';
};

export function speak(text: string, options: SpeakOptions = {}): Promise<void> {
  const langOpt = options.lang ?? 'auto';
  const lang =
    langOpt === 'auto'
      ? isEnglishText(text) ? LANG_EN : LANG_JA
      : langOpt;

  // Read slower for clarity — 国語/社会 etc. were too fast to follow.
  // English a touch slower still for a relaxed native cadence.
  const defaultRate = lang === LANG_EN ? 0.82 : 0.85;
  const rate = options.rate ?? defaultRate;

  const token = cancelToken;

  if (isWebSpeech()) {
    return new Promise((resolve) => {
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = lang;
      utter.rate = rate;
      const voice = pickVoice(lang);
      if (voice) utter.voice = voice;

      let settled = false;
      const finish = () => {
        if (settled || token !== cancelToken) return;
        settled = true;
        resolve();
      };

      // iOS Safari sometimes skips onend — use a generous fallback timer.
      const fallbackMs = Math.max(4000, text.length * 130 / rate + 1500);
      const fallback = setTimeout(finish, fallbackMs);

      utter.onend = () => {
        clearTimeout(fallback);
        finish();
      };
      utter.onerror = () => {
        clearTimeout(fallback);
        finish();
      };

      window.speechSynthesis.resume();
      window.speechSynthesis.speak(utter);
    });
  }

  return new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled || token !== cancelToken) return;
      settled = true;
      resolve();
    };

    Speech.speak(text, {
      language: lang,
      rate,
      onDone: finish,
      onStopped: finish,
      onError: finish,
    });
  });
}

export function toSpeechText(text: string): string {
  return text
    .replace(/㎠/g, '平方センチメートル')
    .replace(/㎤/g, '立方センチメートル')
    .replace(/cm³/g, '立方センチメートル')
    .replace(/cm²/g, '平方センチメートル')
    .replace(/m²/g, '平方メートル')
    .replace(/NaHCO₃/g, '炭酸水素ナトリウム')
    .replace(/Na₂CO₃/g, '炭酸ナトリウム')
    .replace(/CuCl₂/g, '塩化銅')
    .replace(/NH₃/g, 'アンモニア')
    .replace(/NaCl/g, '塩化ナトリウム')
    .replace(/CO₂/g, '二酸化炭素')
    .replace(/H₂O/g, '水')
    .replace(/Cl₂/g, '塩素')
    .replace(/√(\d+)/g, 'ルート$1')
    .replace(/(\w)⁵/g, '$1の5乗')
    .replace(/(\w)⁴/g, '$1の4乗')
    .replace(/(\w)³/g, '$1の3乗')
    .replace(/(\w)²/g, '$1の2乗')
    .replace(/₅C₃/g, '5コンビネーション3')
    .replace(/₅C₂/g, '5コンビネーション2')
    .replace(/₃C₂/g, '3コンビネーション2')
    .replace(/π/g, 'パイ')
    .replace(/Ω/g, 'オーム')
    .replace(/×/g, 'かける')
    .replace(/÷/g, 'わる')
    .replace(/→/g, 'から')
    .replace(/≈/g, 'およそ')
    .replace(/≦/g, 'いか')
    .replace(/≧/g, 'いじょう')
    .replace(/(\d+)\/(\d+)/g, '$2分の$1')
    .replace(/₁/g, '1')
    .replace(/₂/g, '2')
    .replace(/₃/g, '3')
    .replace(/₄/g, '4')
    .replace(/₅/g, '5')
    .replace(/₆/g, '6')
    .replace(/やうやう/g, 'ようよう')
    .replace(/いづれ/g, 'いずれ')
    .replace(/ゐ/g, 'い')
    .replace(/ゑ/g, 'え');
}
