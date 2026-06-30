import { Platform } from 'react-native';

const OPENAI_API_KEY = process.env.EXPO_PUBLIC_OPENAI_API_KEY ?? '';

/**
 * OpenAI TTS API で英語音声を再生する（Pro/Vocab paywall後に使用）
 * Web: HTMLAudioElement, Native: expo-av を使用
 */
export async function speakWithOpenAI(text: string): Promise<void> {
  if (!OPENAI_API_KEY) {
    // フォールバック: デバイス TTS
    await speakWithDevice(text);
    return;
  }

  try {
    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'tts-1-hd',
        input: text,
        voice: 'alloy', // 自然な英語発音
        response_format: 'mp3',
        speed: 0.9,     // やや遅めで聞き取りやすく
      }),
    });

    if (!response.ok) throw new Error(`TTS API error: ${response.status}`);

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    await playAudioUrl(url);
    URL.revokeObjectURL(url);
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

export function isTTSPremiumAvailable(): boolean {
  return OPENAI_API_KEY.length > 10;
}
