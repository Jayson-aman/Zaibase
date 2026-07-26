// このファイルは scripts/generate-melody-audio.mjs による自動生成です。
// Song.melody 文字列 → 参考メロディ音源（assets/melodies/*.wav）のマッピング。
// サイン波シンセによる簡易な参考旋律（実演奏の録音ではない）。
import { AudioSource } from 'expo-audio';

export const melodyAudio: Record<string, AudioSource> = {
  "きらきら星": require('../assets/melodies/kirakiraboshi.wav'),
  "桃太郎": require('../assets/melodies/momotaro.wav'),
  "桃太郎（ももたろさん）": require('../assets/melodies/momotaro.wav'),
  "かえるの合唱": require('../assets/melodies/kaeru-no-gassho.wav'),
  "ぶんぶんぶん": require('../assets/melodies/bunbunbun.wav'),
  "チューリップ": require('../assets/melodies/tulip.wav'),
  "むすんでひらいて": require('../assets/melodies/musunde-hiraite.wav'),
  "どんぐりころころ": require('../assets/melodies/donguri-korokoro.wav'),
  "うさぎとかめ": require('../assets/melodies/usagi-to-kame.wav'),
  "うさぎとかめ（もしもしかめよ）": require('../assets/melodies/usagi-to-kame.wav'),
  "ふるさと": require('../assets/melodies/furusato.wav'),
  "茶摘み": require('../assets/melodies/chatsumi.wav'),
  "うみ": require('../assets/melodies/umi.wav'),
  "ちょうちょう": require('../assets/melodies/chocho.wav'),
  "あおげば尊し": require('../assets/melodies/aogeba-toutoshi.wav'),
  "アルプス一万尺": require('../assets/melodies/alps-ichimanjaku.wav'),
  "線路（せんろ）はつづくよどこまでも": require('../assets/melodies/senro-tsuzuku.wav'),
  "幸（しあわ）せなら手をたたこう": require('../assets/melodies/shiawase-nara.wav'),
};
