import { Platform } from 'react-native';
import { callFirebaseFunction } from './firebaseClient';

type SpeakTextResult = { ok: true; audioBase64: string };

/**
 * サーバー側Cloud Function（speakText）経由でOpenAI TTS音声を再生する。
 * APIキーはサーバー側のみで保持し、クライアントには一切含まれない
 * （1日あたりの呼び出し回数はサーバー側で制限される）。
 * Web: HTMLAudioElement, Native: expo-av を使用
 */
export async function speakWithOpenAI(text: string): Promise<void> {
  try {
    const { audioBase64 } = await callFirebaseFunction<{ text: string }, SpeakTextResult>(
      'speakText',
      { text }
    );
    await playAudioUrl(`data:audio/mp3;base64,${audioBase64}`);
  } catch {
    await speakWithDevice(text);
  }
}

async function playAudioUrl(url: string): Promise<void> {
  if (Platform.OS === 'web') {
    return new Promise((resolve, reject) => {
      const audio = new Audio(url);
      audio.onended = () => resolve();
      audio.onerror = reject;
      audio.play().catch(reject);
    });
  }

  // Native: expo-av
  try {
    const { Audio } = await import('expo-av');
    const { sound } = await Audio.Sound.createAsync({ uri: url });
    await sound.playAsync();
    await new Promise<void>((resolve) => {
      sound.setOnPlaybackStatusUpdate((status) => {
        if ('didJustFinish' in status && status.didJustFinish) {
          sound.unloadAsync();
          resolve();
        }
      });
    });
  } catch {
    await speakWithDevice(url);
  }
}

/** デバイス TTS フォールバック（無料ユーザー向け） */
export async function speakWithDevice(text: string): Promise<void> {
  if (Platform.OS === 'web') {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      window.speechSynthesis.speak(utterance);
    });
  }

  try {
    const Speech = (await import('expo-speech')).default;
    await new Promise<void>((resolve) => {
      Speech.speak(text, {
        language: 'en-US',
        rate: 0.85,
        onDone: resolve,
        onError: () => resolve(),
      });
    });
  } catch {
    // 無視
  }
}
