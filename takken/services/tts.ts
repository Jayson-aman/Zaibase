import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Audio } from 'expo-av';

const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_TTS_API_KEY ?? '';
const TTS_URL = 'https://texttospeech.googleapis.com/v1/text:synthesize';
const CACHE_DIR = (FileSystem.cacheDirectory ?? '') + 'takken_tts/';

export type TTSVoice = 'ja-JP-Standard-C' | 'ja-JP-Standard-D';
export type TTSSpeed = 0.75 | 1.0 | 1.25 | 1.5;

async function fetchBase64Audio(text: string, voice: TTSVoice, rate: number): Promise<string> {
  if (!API_KEY) throw new Error('Google TTS API key not set. Set EXPO_PUBLIC_GOOGLE_TTS_API_KEY in .env');
  const res = await fetch(`${TTS_URL}?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      input: { text },
      voice: { languageCode: 'ja-JP', name: voice },
      audioConfig: { audioEncoding: 'MP3', speakingRate: rate },
    }),
  });
  if (!res.ok) throw new Error(`TTS API error: ${res.status}`);
  const data = await res.json();
  if (!data.audioContent) throw new Error('No audio content in TTS response');
  return data.audioContent as string;
}

async function ensureCacheDir(): Promise<void> {
  if (Platform.OS === 'web') return;
  const info = await FileSystem.getInfoAsync(CACHE_DIR);
  if (!info.exists) await FileSystem.makeDirectoryAsync(CACHE_DIR, { intermediates: true });
}

function cacheKey(chapterId: string, voice: TTSVoice, rate: number): string {
  return `${chapterId}_${voice}_${rate}.mp3`;
}

export async function createSound(
  text: string,
  chapterId: string,
  voice: TTSVoice = 'ja-JP-Standard-C',
  rate: TTSSpeed = 1.0,
): Promise<Audio.Sound> {
  await Audio.setAudioModeAsync({
    staysActiveInBackground: true,
    playsInSilentModeIOS: true,
  });

  const base64 = await fetchBase64Audio(text, voice, rate);

  if (Platform.OS === 'web') {
    const uri = `data:audio/mp3;base64,${base64}`;
    const { sound } = await Audio.Sound.createAsync({ uri });
    return sound;
  }

  await ensureCacheDir();
  const filePath = CACHE_DIR + cacheKey(chapterId, voice, rate);
  const info = await FileSystem.getInfoAsync(filePath);
  if (!info.exists) {
    await FileSystem.writeAsStringAsync(filePath, base64, {
      encoding: FileSystem.EncodingType.Base64,
    });
  }
  const { sound } = await Audio.Sound.createAsync({ uri: filePath });
  return sound;
}

export async function clearTTSCache(): Promise<void> {
  if (Platform.OS === 'web') return;
  const info = await FileSystem.getInfoAsync(CACHE_DIR);
  if (info.exists) await FileSystem.deleteAsync(CACHE_DIR, { idempotent: true });
}
