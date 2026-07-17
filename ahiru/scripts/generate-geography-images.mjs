#!/usr/bin/env node
/**
 * Gemini（Nano Banana Pro / Flash Image）で ahiru 地理マップ用の
 * 「産地イラスト」を生成します（みかん・とうもろこし・お茶など）。
 *
 * これらは「実写の写真」ではなく、教育向けのオリジナル・イラストです
 * （実在の商品パッケージやロゴ・実在人物は描きません）。
 *
 * 使い方:
 *   export GEMINI_API_KEY="your-key"      # https://aistudio.google.com/apikey
 *   node scripts/generate-geography-images.mjs           # Nano Banana Pro（高品質）
 *   node scripts/generate-geography-images.mjs --model flash   # 高速・低コスト
 *
 * 生成後、assets/geography/ にPNGが保存され、
 * data/geographyImages.ts の require マッピングが自動更新されます。
 * アプリを再読み込みすると、産地スポットライトにイラストが表示されます。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '../assets/geography');
const MAP_TS = path.join(__dirname, '../data/geographyImages.ts');

const MODELS = {
  flash: 'gemini-3.1-flash-image-preview',
  pro: 'gemini-3-pro-image-preview',
};

const STYLE =
  'Bright, clean, friendly educational illustration for a Japanese elementary-school geography app. ' +
  'Soft shading, appetizing and clear, like a premium textbook or picture-book. ' +
  'Square composition. NO text, NO logos, NO brand packaging, NO real people, NO watermark. ' +
  'Original illustration only.';

/**
 * key       : 画像ファイル名（拡張子なし）＝assets/geography/{key}.png
 * spotlight : data/geographyRegions.ts のスポットライト name と一致させる（UI照合キー）
 * prompt    : 生成プロンプト
 */
const PRODUCTS = [
  { key: 'hokkaido-potato', spotlight: 'じゃがいも（男爵・メークイン）',
    prompt: `Freshly harvested potatoes piled on rich dark soil of a vast Hokkaido field, a few cut open to show pale flesh. ${STYLE}` },
  { key: 'hokkaido-dairy', spotlight: '根釧台地の酪農',
    prompt: `Black-and-white dairy cows grazing on a huge green pasture in Hokkaido, red barn and blue sky in the distance. ${STYLE}` },
  { key: 'yamagata-cherry', spotlight: 'さくらんぼ（佐藤錦）',
    prompt: `A cluster of glossy bright-red cherries (Sato-Nishiki variety) hanging on a branch with green leaves, sunlight. ${STYLE}` },
  { key: 'tohoku-rice', spotlight: 'ひとめぼれ・つや姫',
    prompt: `Golden rice paddy field ready for harvest, heavy ripe rice ears bending, mountains behind, autumn light. ${STYLE}` },
  { key: 'tochigi-strawberry', spotlight: 'とちおとめイチゴ',
    prompt: `Rows of ripe red strawberries growing in a bright greenhouse, a few plump berries in front. ${STYLE}` },
  { key: 'gunma-cabbage', spotlight: '嬬恋キャベツ',
    prompt: `A wide field of fresh round green cabbages on a cool highland plateau, mountains in the background. ${STYLE}` },
  { key: 'chiba-flowers', spotlight: '花木・花き（房総半島）',
    prompt: `Colorful flower fields (marigolds, poppies, stocks) on the Boso peninsula near the sea, spring sunshine. ${STYLE}` },
  { key: 'shizuoka-tea', spotlight: '静岡茶（牧之原台地）',
    prompt: `Neat curved rows of green tea bushes on the Makinohara tea plateau, snow-capped Mt. Fuji in the background. ${STYLE}` },
  { key: 'nagano-lettuce', spotlight: '野辺山高原のレタス',
    prompt: `A field of fresh green lettuce heads on a cool high plateau at the foot of Yatsugatake mountains, clear sky. ${STYLE}` },
  { key: 'okayama-muscat', spotlight: '岡山マスカット',
    prompt: `A large bunch of translucent green Muscat grapes on the vine, dewy and shiny, leaves around. ${STYLE}` },
  { key: 'kochi-vegetables', spotlight: '高知の促成栽培（なす・ピーマン）',
    prompt: `Glossy purple eggplants and bright green bell peppers growing in a warm sunny greenhouse. ${STYLE}` },
  { key: 'miyazaki-beef', spotlight: '宮崎牛（A5ランク黒毛和牛）',
    prompt: `Healthy black Japanese Wagyu cattle standing on green grassland in Miyazaki, blue sky, gentle look. ${STYLE}` },
  { key: 'kagoshima-tea', spotlight: '知覧茶（お茶）',
    prompt: `Rolling green tea fields in Chiran, Kagoshima, with Sakurajima volcano gently smoking in the distance. ${STYLE}` },
  { key: 'arida-mikan', spotlight: '有田みかん（和歌山）',
    prompt: `Bright orange mikan (mandarin oranges) on trees growing on terraced stone slopes by the sea in Wakayama, sunny. ${STYLE}` },
  { key: 'nanko-ume', spotlight: '南高梅〔梅〕（和歌山・みなべ町）',
    prompt: `Plump green and blushing-pink ume (Japanese plum/apricot) fruits on a branch in a Wakayama plum orchard, spring blossoms nearby. ${STYLE}` },
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

function writeMap(generatedKeys) {
  const lines = PRODUCTS.filter((p) => generatedKeys.has(p.key)).map(
    (p) => `  ${JSON.stringify(p.spotlight)}: require('../assets/geography/${p.key}.png'),`
  );
  const content = `// このファイルは scripts/generate-geography-images.mjs による自動生成です。
// 産地スポットライト名 → イラスト画像（assets/geography/*.png）のマッピング。
// 画像が未生成の場合は空になります（UIは画像なしで動作します）。
import { ImageSourcePropType } from 'react-native';

export const geographyImages: Record<string, ImageSourcePropType> = {
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
  console.log(`Model: ${modelId} (Nano Banana ${modelArg === 'pro' ? 'Pro' : '2'})`);
  console.log(`Output: ${OUT_DIR}\n`);

  const generated = new Set();
  // 既存のPNGも拾う（再生成せずマッピングに含めたい場合）
  for (const p of PRODUCTS) {
    if (fs.existsSync(path.join(OUT_DIR, `${p.key}.png`))) generated.add(p.key);
  }

  for (const p of PRODUCTS) {
    const outPath = path.join(OUT_DIR, `${p.key}.png`);
    process.stdout.write(`Generating ${p.key} (${p.spotlight})... `);
    try {
      const buffer = await generateImage(apiKey, modelId, p.prompt);
      fs.writeFileSync(outPath, buffer);
      generated.add(p.key);
      console.log('OK');
    } catch (err) {
      console.log('FAILED');
      console.error(`  ${err.message}`);
    }
    await new Promise((r) => setTimeout(r, 2000));
  }

  writeMap(generated);
  console.log(`\nDone. ${generated.size}/${PRODUCTS.length} images. data/geographyImages.ts を更新しました。`);
  console.log('アプリを再読み込みすると、産地スポットライトにイラストが表示されます。');
}

main();
