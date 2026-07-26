#!/usr/bin/env node
/**
 * 替え歌（覚え歌）用の「メロディ確認音源」を、外部音源・録音を使わず
 * サイン波シンセでその場で合成してWAVファイルとして書き出す。
 *
 * これは実際の録音の複製ではなく、パブリックドメインの童謡・唱歌の
 * 旋律をもとにした簡易な参考音（鼻歌代わりのシンプルな単音メロディ）。
 * 音源ファイルではなく「音階＋長さ」のデータから毎回ゼロから生成するため、
 * 著作権的にクリーンな自前のオリジナル出力となる。
 *
 * 使い方:
 *   node scripts/generate-melody-audio.mjs
 *
 * 出力:
 *   assets/melodies/{key}.wav
 *   data/melodyAudio.ts （メロディ名 → require マッピング、自動生成）
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '../assets/melodies');
const MAP_TS = path.join(__dirname, '../data/melodyAudio.ts');

const SAMPLE_RATE = 22050;
const TEMPO_BPM = 100; // 1拍(beat=1)の長さの基準
const SEC_PER_BEAT = 60 / TEMPO_BPM;

// 音名 → 周波数（A4=440Hz の平均律）
const NOTE_INDEX = { C: -9, D: -7, E: -5, F: -4, G: -2, A: 0, B: 2 };
function noteFreq(note) {
  if (note === 'R') return 0; // 休符
  const m = /^([A-G])(#?)(\d)$/.exec(note);
  if (!m) throw new Error(`invalid note: ${note}`);
  const [, letter, sharp, octaveStr] = m;
  const octave = parseInt(octaveStr, 10);
  let semitone = NOTE_INDEX[letter] + (sharp ? 1 : 0);
  semitone += (octave - 4) * 12;
  return 440 * Math.pow(2, semitone / 12);
}

/**
 * key   : ファイル名（拡張子なし）＝assets/melodies/{key}.wav
 * names : この旋律に対応する data/songs*.ts の melody 文字列（複数表記ゆれをまとめる）
 * notes : { note, beats }[]（note は 'C4' 形式、休符は 'R'。beats は四分音符=1）
 *
 * パブリックドメインの日本の唱歌・童謡・外国民謡（日本語詞）の冒頭フレーズを
 * シンプルな単旋律で採譜したもの（正式な公式楽譜そのものではなく簡易な参考旋律）。
 */
const MELODIES = [
  { key: 'kirakiraboshi', names: ['きらきら星'], notes: [
    { note: 'C4', beats: 1 }, { note: 'C4', beats: 1 }, { note: 'G4', beats: 1 }, { note: 'G4', beats: 1 },
    { note: 'A4', beats: 1 }, { note: 'A4', beats: 1 }, { note: 'G4', beats: 2 },
    { note: 'F4', beats: 1 }, { note: 'F4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'E4', beats: 1 },
    { note: 'D4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'C4', beats: 2 },
  ] },
  { key: 'momotaro', names: ['桃太郎', '桃太郎（ももたろさん）'], notes: [
    { note: 'G4', beats: 1 }, { note: 'G4', beats: 1 }, { note: 'G4', beats: 1 }, { note: 'B4', beats: 1 },
    { note: 'G4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'G4', beats: 2 },
    { note: 'G4', beats: 1 }, { note: 'A4', beats: 1 }, { note: 'G4', beats: 1 }, { note: 'F4', beats: 1 },
    { note: 'E4', beats: 1 }, { note: 'D4', beats: 2 },
  ] },
  { key: 'kaeru-no-gassho', names: ['かえるの合唱'], notes: [
    { note: 'C4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'C4', beats: 1 },
    { note: 'C4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'C4', beats: 1 },
    { note: 'E4', beats: 1 }, { note: 'F4', beats: 1 }, { note: 'G4', beats: 2 },
  ] },
  { key: 'bunbunbun', names: ['ぶんぶんぶん'], notes: [
    { note: 'G4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'E4', beats: 1 },
    { note: 'A4', beats: 1 }, { note: 'F4', beats: 1 }, { note: 'F4', beats: 1 },
    { note: 'G4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'C4', beats: 2 },
  ] },
  { key: 'tulip', names: ['チューリップ'], notes: [
    { note: 'D4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'F4', beats: 2 },
    { note: 'D4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'F4', beats: 2 },
    { note: 'F4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'F4', beats: 1 }, { note: 'G4', beats: 2 },
  ] },
  { key: 'musunde-hiraite', names: ['むすんでひらいて'], notes: [
    { note: 'C4', beats: 1 }, { note: 'C4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'E4', beats: 1 },
    { note: 'D4', beats: 1 }, { note: 'C4', beats: 1 }, { note: 'E4', beats: 2 },
  ] },
  { key: 'donguri-korokoro', names: ['どんぐりころころ'], notes: [
    { note: 'G4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'C4', beats: 1 },
    { note: 'D4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'G4', beats: 2 },
  ] },
  { key: 'usagi-to-kame', names: ['うさぎとかめ', 'うさぎとかめ（もしもしかめよ）'], notes: [
    { note: 'G4', beats: 1 }, { note: 'G4', beats: 1 }, { note: 'G4', beats: 1 }, { note: 'E4', beats: 1 },
    { note: 'G4', beats: 1 }, { note: 'C5', beats: 1 }, { note: 'B4', beats: 1 }, { note: 'A4', beats: 1 }, { note: 'G4', beats: 2 },
  ] },
  { key: 'furusato', names: ['ふるさと'], notes: [
    { note: 'G4', beats: 1 }, { note: 'C5', beats: 1 }, { note: 'C5', beats: 1 }, { note: 'B4', beats: 1 },
    { note: 'A4', beats: 1 }, { note: 'G4', beats: 1 }, { note: 'E4', beats: 2 },
  ] },
  { key: 'chatsumi', names: ['茶摘み'], notes: [
    { note: 'G4', beats: 1 }, { note: 'G4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'G4', beats: 1 },
    { note: 'A4', beats: 1 }, { note: 'G4', beats: 1 }, { note: 'E4', beats: 2 },
  ] },
  { key: 'umi', names: ['うみ'], notes: [
    { note: 'G4', beats: 1 }, { note: 'G4', beats: 1 }, { note: 'G4', beats: 1 }, { note: 'E4', beats: 1 },
    { note: 'G4', beats: 1 }, { note: 'A4', beats: 1 }, { note: 'G4', beats: 2 },
  ] },
  { key: 'chocho', names: ['ちょうちょう'], notes: [
    { note: 'G4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'E4', beats: 1 },
    { note: 'F4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'D4', beats: 1 },
    { note: 'C4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'F4', beats: 1 }, { note: 'G4', beats: 1 }, { note: 'G4', beats: 2 },
  ] },
  { key: 'aogeba-toutoshi', names: ['あおげば尊し'], notes: [
    { note: 'C4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'F4', beats: 1 }, { note: 'G4', beats: 1 },
    { note: 'A4', beats: 1 }, { note: 'G4', beats: 1 }, { note: 'F4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'C4', beats: 2 },
  ] },
  { key: 'alps-ichimanjaku', names: ['アルプス一万尺'], notes: [
    { note: 'G4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'C5', beats: 1 }, { note: 'C5', beats: 1 },
    { note: 'B4', beats: 1 }, { note: 'G4', beats: 2 },
    { note: 'A4', beats: 1 }, { note: 'B4', beats: 1 }, { note: 'C5', beats: 1 }, { note: 'B4', beats: 1 }, { note: 'A4', beats: 1 }, { note: 'G4', beats: 2 },
  ] },
  { key: 'senro-tsuzuku', names: ['線路（せんろ）はつづくよどこまでも'], notes: [
    { note: 'C4', beats: 1 }, { note: 'C4', beats: 1 }, { note: 'C4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'E4', beats: 2 },
    { note: 'E4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'C4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'G4', beats: 2 },
  ] },
  { key: 'shiawase-nara', names: ['幸（しあわ）せなら手をたたこう'], notes: [
    { note: 'C4', beats: 1 }, { note: 'C4', beats: 1 }, { note: 'F4', beats: 1 }, { note: 'F4', beats: 1 },
    { note: 'F4', beats: 1 }, { note: 'F4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'D4', beats: 1 },
    { note: 'E4', beats: 1 }, { note: 'F4', beats: 2 },
  ] },
];

function synthMelody(notes) {
  const totalSamples = notes.reduce((sum, n) => sum + Math.round(n.beats * SEC_PER_BEAT * SAMPLE_RATE), 0);
  const buf = new Float32Array(totalSamples);
  let offset = 0;
  for (const { note, beats } of notes) {
    const nSamples = Math.round(beats * SEC_PER_BEAT * SAMPLE_RATE);
    const freq = noteFreq(note);
    const attack = Math.min(0.02 * SAMPLE_RATE, nSamples * 0.15);
    const release = Math.min(0.05 * SAMPLE_RATE, nSamples * 0.25);
    for (let i = 0; i < nSamples; i++) {
      let env = 1;
      if (i < attack) env = i / attack;
      else if (i > nSamples - release) env = Math.max(0, (nSamples - i) / release);
      const t = i / SAMPLE_RATE;
      const sample = freq > 0
        ? (Math.sin(2 * Math.PI * freq * t) * 0.7 + Math.sin(2 * Math.PI * freq * 2 * t) * 0.15) * env * 0.5
        : 0;
      buf[offset + i] = sample;
    }
    offset += nSamples;
  }
  return buf;
}

function floatToWav(samples, sampleRate) {
  const numSamples = samples.length;
  const bytesPerSample = 2;
  const blockAlign = bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = numSamples * bytesPerSample;
  const buffer = Buffer.alloc(44 + dataSize);
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20); // PCM
  buffer.writeUInt16LE(1, 22); // mono
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);
  for (let i = 0; i < numSamples; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    buffer.writeInt16LE(Math.round(s * 32767), 44 + i * 2);
  }
  return buffer;
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const lines = [];
  for (const m of MELODIES) {
    const samples = synthMelody(m.notes);
    const wav = floatToWav(samples, SAMPLE_RATE);
    const outPath = path.join(OUT_DIR, `${m.key}.wav`);
    fs.writeFileSync(outPath, wav);
    console.log(`${m.key}.wav (${Math.round(wav.length / 1024)}KB) <- ${m.names.join(' / ')}`);
    for (const name of m.names) {
      lines.push(`  ${JSON.stringify(name)}: require('../assets/melodies/${m.key}.wav'),`);
    }
  }
  const content = `// このファイルは scripts/generate-melody-audio.mjs による自動生成です。
// Song.melody 文字列 → 参考メロディ音源（assets/melodies/*.wav）のマッピング。
// サイン波シンセによる簡易な参考旋律（実演奏の録音ではない）。
import { AudioSource } from 'expo-audio';

export const melodyAudio: Record<string, AudioSource> = {
${lines.join('\n')}
};
`;
  fs.writeFileSync(MAP_TS, content, 'utf8');
  console.log(`\nDone. ${MELODIES.length} melodies. data/melodyAudio.ts を更新しました。`);
}

main();
