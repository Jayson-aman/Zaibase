#!/usr/bin/env node
/**
 * Gemini（Nano Banana Pro / Flash Image）で ahiru 年表用の
 * 「歴史イラスト」を生成します（卑弥呼・仁徳天皇陵・大仏など）。
 *
 * これらは「実写の写真」ではなく、教育向けのオリジナル・イラストです
 * （実在の商品・ロゴ・現代の実在人物は描きません。写真の残っていない
 *  古代〜近世の歴史上の題材を、教科書ふうのイラストで表現します）。
 *
 * 使い方:
 *   export GEMINI_API_KEY="your-key"      # https://aistudio.google.com/apikey
 *   node scripts/generate-history-images.mjs           # Nano Banana Pro（高品質）
 *   node scripts/generate-history-images.mjs --model flash   # 高速・低コスト
 *
 * 生成後、assets/history/ にPNGが保存され、
 * data/historyImages.ts の require マッピングが自動更新されます。
 * 年表（timeline）の img キーと一致した項目にイラストが表示されます。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '../assets/history');
const MAP_TS = path.join(__dirname, '../data/historyImages.ts');

const MODELS = {
  flash: 'gemini-3.1-flash-image-preview',
  pro: 'gemini-3-pro-image-preview',
};

const STYLE =
  'Warm, clean, friendly educational illustration for a Japanese school history textbook. ' +
  'Soft shading, clear and dignified, picture-book quality. Square composition. ' +
  'NO text, NO letters, NO captions, NO logos, NO watermark, NO real modern people. ' +
  'Historically plausible clothing and setting. Original illustration only.';

// key は data/timeline.ts の各イベントの `img` と一致させる（UI照合キー）。
// 既存の肖像画（history-portraits.ts）やイベント画像と重複しない「画像の無い」
// 題材だけを対象にする（卑弥呼・仁徳天皇陵・出島など）。
const SUBJECTS = [
  { key: 'himiko',
    prompt: `Ancient Yayoi-period shaman queen of Japan in white ritual robes holding a polished bronze mirror, standing before a raised-floor wooden shrine, mystical calm atmosphere. ${STYLE}` },
  { key: 'daisen-kofun',
    prompt: `Aerial bird's-eye view of a gigantic keyhole-shaped ancient Japanese burial mound (zenpokoenfun) covered in green trees and surrounded by water-filled moats, farmland around. ${STYLE}` },
  { key: 'heiankyo',
    prompt: `Aerial view of an ancient Japanese Heian-period capital laid out in a vast rectangular grid with a wide central avenue leading to a palace at the north, mountains around, spring. ${STYLE}` },
  { key: 'teppo',
    prompt: `Mid-16th-century scene on a Japanese island: a Portuguese trader handing an early matchlock gun to a curious Japanese samurai, a wooden trading ship behind, coastal village. ${STYLE}` },
  { key: 'sankin-kotai',
    prompt: `A long Edo-period feudal-lord procession of samurai and retainers carrying banners and a palanquin, walking along a highway with Mount Fuji in the distance. ${STYLE}` },
  { key: 'dejima',
    prompt: `Aerial view of a small fan-shaped artificial island trading post in a Japanese bay, with Dutch-style and Japanese buildings and a sailing ship docked, Edo-period isolation era. ${STYLE}` },
  { key: 'bunmei-kaika',
    prompt: `A Meiji-era Japanese street of Western-style brick buildings with gas street lamps, a horse-drawn tram, and people in mixed Western and traditional clothing, bright day. ${STYLE}` },
  { key: 'shinkansen',
    prompt: `The first-generation Japanese high-speed bullet train, white with a blue stripe and a round nose, speeding along an elevated track past Mount Fuji, clear blue sky, 1960s. ${STYLE}` },
];

async function generateImage(apiKey, modelId, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`;
  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Gemini API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const parts = data.candidates?.[0]?.content?.parts ?? [];
  for (const part of parts) {
    if (part.inlineData?.data) return Buffer.from(part.inlineData.data, 'base64');
  }
  throw new Error('No image in response');
}

// sharp があればモバイル向けに縮小＋PNG圧縮する（無くても素の画像を保存して動く）。
let sharpMod = null;
async function loadSharp() {
  if (sharpMod !== null) return sharpMod;
  try {
    sharpMod = (await import('sharp')).default;
  } catch {
    sharpMod = false;
  }
  return sharpMod;
}
async function toPng(buffer) {
  const sharp = await loadSharp();
  if (!sharp) return null;
  return sharp(buffer).resize(640, 640, { fit: 'cover' }).png({ compressionLevel: 9, quality: 82 }).toBuffer();
}

function writeMap(generatedKeys) {
  const lines = SUBJECTS.filter((s) => generatedKeys.has(s.key)).map(
    (s) => `  ${JSON.stringify(s.key)}: require('../assets/history/${s.key}.png'),`
  );
  const content = `// このファイルは scripts/generate-history-images.mjs による自動生成です。
// 年表イベントの img キー → 教育用オリジナルイラスト（assets/history/*.png）。
// 画像が未生成の場合は空になります（UIは画像なしで動作します）。
import { ImageSourcePropType } from 'react-native';

export const historyImages: Record<string, ImageSourcePropType> = {
${lines.join('\n')}
};
`;
  fs.writeFileSync(MAP_TS, content, 'utf8');
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY を設定してください: https://aistudio.google.com/apikey');
    process.exit(1);
  }
  const modelArg = process.argv.includes('--model')
    ? process.argv[process.argv.indexOf('--model') + 1]
    : 'pro';
  const modelId = MODELS[modelArg] ?? MODELS.pro;

  fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log(`Model: ${modelId}`);
  console.log(`Output: ${OUT_DIR}\n`);

  const generated = new Set();
  for (const s of SUBJECTS) {
    if (fs.existsSync(path.join(OUT_DIR, `${s.key}.png`))) generated.add(s.key);
  }

  for (const s of SUBJECTS) {
    const outPath = path.join(OUT_DIR, `${s.key}.png`);
    process.stdout.write(`Generating ${s.key}... `);
    try {
      const raw = await generateImage(apiKey, modelId, s.prompt);
      const png = await toPng(raw);
      fs.writeFileSync(outPath, png ?? raw);
      const kb = Math.round(fs.statSync(outPath).size / 1024);
      generated.add(s.key);
      console.log(`OK (${kb}KB${png ? ', png640' : ', raw'})`);
    } catch (err) {
      console.log('FAILED');
      console.error(`  ${err.message}`);
    }
    await new Promise((r) => setTimeout(r, 2000));
  }

  writeMap(generated);
  console.log(`\nDone. ${generated.size}/${SUBJECTS.length} images. data/historyImages.ts を更新しました。`);
}

main();
