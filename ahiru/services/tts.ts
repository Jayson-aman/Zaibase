import { Platform } from 'react-native';
import { callFirebaseFunction } from './firebaseClient';

type SpeakTextResult = { ok: true; audioBase64: string };

/**
 * サーバー側Cloud Function（speakText）経由でOpenAI TTS音声を再生する。
 * APIキーはサーバー側のみで保持し、クライアントには一切含まれない
 * （1日あたりの呼び出し回数はサーバー側で制限される）。
 * Web: HTMLAudioElement, Native: expo-audio を使用
 */
export async function speakWithOpenAI(text: string, speed: number = 1.0): Promise<void> {
  const safeSpeed = Math.min(1.3, Math.max(0.7, speed));
  try {
    const { audioBase64 } = await callFirebaseFunction<
      { text: string; speed: number },
      SpeakTextResult
    >('speakText', { text, speed: safeSpeed });
    await playAudioUrl(`data:audio/mp3;base64,${audioBase64}`);
  } catch {
    await speakWithDevice(text, speed);
  }
}

// 再生中の音声を stopSpeaking() から止められるように保持しておく。
// 保持しないと、画面を離れても OpenAI 音声が鳴り続ける。
let currentStop: (() => void) | null = null;

async function playAudioUrl(url: string): Promise<void> {
  if (Platform.OS === 'web') {
    return new Promise((resolve, reject) => {
      const audio = new Audio(url);
      const done = () => {
        if (currentStop === stop) currentStop = null;
        resolve();
      };
      const stop = () => {
        try {
          audio.pause();
        } catch {
          // 既に停止済みなら無視
        }
        done();
      };
      currentStop = stop;
      audio.onended = done;
      audio.onerror = () => {
        if (currentStop === stop) currentStop = null;
        reject(new Error('audio error'));
      };
      audio.play().catch((e) => {
        if (currentStop === stop) currentStop = null;
        reject(e);
      });
    });
  }

  // Native: expo-audio（expo-av は SDK 56 で廃止）
  // 再生が終わらない/失敗した場合でも必ず解決させる。解決しないと呼び出し元の
  // ローディング表示（🔊ボタン）が戻らず、二度と押せなくなる。
  try {
    const { createAudioPlayer } = await import('expo-audio');
    const player = createAudioPlayer({ uri: url });
    player.play();
    await new Promise<void>((resolve) => {
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        // 自分の停止ハンドルの場合だけ消す。無条件に消すと、後から始まった
        // 別の再生のハンドルまで捨ててしまい、その音を止められなくなる。
        if (currentStop === stopThis) currentStop = null;
        clearTimeout(timer);
        try {
          sub?.remove?.();
          player.remove();
        } catch {
          // 既に破棄済みなら無視
        }
        resolve();
      };
      const sub = player.addListener('playbackStatusUpdate', (status) => {
        if (status.didJustFinish) finish();
      });
      // 音声は最長でも数十秒。保険として60秒で必ず打ち切る。
      const timer = setTimeout(finish, 60000);
      // 画面を離れたときに stopSpeaking() から止められるようにする
      const stopThis = () => {
        try {
          player.pause();
        } catch {
          // 既に破棄済みなら無視
        }
        finish();
      };
      currentStop = stopThis;
    });
  } catch {
    // 音声データのURLではなく元のテキストを読ませたいので、ここでは端末TTSを呼ばない
    // （data:URLをそのまま読み上げると数十万文字の base64 を読み上げてしまう）。
  }
}

/** デバイス TTS フォールバック（無料ユーザー向け） */
export async function speakWithDevice(text: string, speed: number = 1.0): Promise<void> {
  const rate = 0.85 * speed;
  if (Platform.OS === 'web') {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = rate;
      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      window.speechSynthesis.speak(utterance);
    });
  }

  try {
    const Speech = await import('expo-speech');
    await new Promise<void>((resolve) => {
      Speech.speak(text, {
        language: 'en-US',
        rate,
        onDone: resolve,
        onError: () => resolve(),
      });
    });
  } catch {
    // 無視
  }
}

/** 日本語テキストを端末TTSで読み上げる（替え歌の歌詞・単語帳の日本語訳など） */
export async function speakJapanese(text: string, speed: number = 1.0): Promise<void> {
  const rate = 0.95 * speed;
  if (Platform.OS === 'web') {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = rate;
      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      window.speechSynthesis.speak(utterance);
    });
  }

  try {
    const Speech = await import('expo-speech');
    await new Promise<void>((resolve) => {
      Speech.speak(text, {
        language: 'ja-JP',
        rate,
        onDone: resolve,
        onError: () => resolve(),
      });
    });
  } catch {
    // 無視
  }
}

/** 再生中の読み上げを止める（画面遷移時など） */
export async function stopSpeaking(): Promise<void> {
  // OpenAI音声（ファイル再生）も止める。端末TTSだけ止めても鳴り続けるため。
  try {
    currentStop?.();
  } catch {
    // 既に停止済みなら無視
  }
  currentStop = null;

  if (Platform.OS === 'web') {
    window.speechSynthesis.cancel();
    return;
  }
  try {
    const Speech = await import('expo-speech');
    await Speech.stop();
  } catch {
    // 無視
  }
}
