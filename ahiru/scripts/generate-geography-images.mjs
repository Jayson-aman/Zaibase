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

  // ── 地形（「山と川」タブの先頭に出す、地域の地形イラスト）──
  { key: 'terrain-hokkaido', spotlight: '地形：北海道',
    prompt: `Aerial view of Hokkaido landscape: vast checkered farm fields on a wide plain, the Hidaka mountain range in the distance, and pack ice floating on the sea at the far coast. ${STYLE}` },
  { key: 'terrain-tohoku', spotlight: '地形：東北',
    prompt: `Tohoku landscape: a long north-south mountain range down the center, golden rice paddies spreading on both sides, and a deeply indented rias coastline with calm bays on the right. ${STYLE}` },
  { key: 'terrain-kanto', spotlight: '地形：関東',
    prompt: `Kanto landscape: an enormous flat plain stretching to the horizon, a very wide river winding across it, low reddish-brown upland fields, distant mountains on the left and the sea on the right. ${STYLE}` },
  { key: 'terrain-chubu', spotlight: '地形：中部',
    prompt: `Chubu landscape: three rows of high sharp snow-capped mountain ranges (Japanese Alps), a symmetrical snow-topped volcano to the right, and a flat river plain reaching the sea in front. ${STYLE}` },
  { key: 'terrain-kinki', spotlight: '地形：近畿',
    prompt: `Kinki landscape: a very large blue lake in the center with a river flowing out of it toward a city plain and a bay, steep forested mountains in the south, and an indented bay coastline. ${STYLE}` },
  { key: 'terrain-chugoku', spotlight: '地形：中国',
    prompt: `Chugoku landscape: an east-west mountain range through the middle, a calm inland sea dotted with many small green islands on the near side, and rippled sand dunes by the sea on the far side. ${STYLE}` },
  { key: 'terrain-shikoku', spotlight: '地形：四国',
    prompt: `Shikoku landscape: rugged mountains running east to west across the island, a wide river flowing east through a green plain to the sea, small irrigation ponds scattered on the dry northern plain, and terraced citrus orchards on sunny slopes. ${STYLE}` },
  { key: 'terrain-kyushu', spotlight: '地形：九州・沖縄',
    prompt: `Kyushu landscape: a huge volcanic caldera basin with fields inside it, a smoking volcano across a bay, pale ash plateaus in the south, and a turquoise coral-reef sea in the far distance. ${STYLE}` },

  // ── 漁業（「漁業」タブ用）──
  { key: 'fishery-hokkaido', spotlight: '漁業：北海道',
    prompt: `Hokkaido fishery scene: a small fishing boat among floating pack ice on a cold sea, scallop-farming ropes being hauled up, snowy shore behind. ${STYLE}` },
  { key: 'fishery-tohoku', spotlight: '漁業：東北',
    prompt: `Sanriku rias-coast fishery: calm narrow bay surrounded by green hills, rows of floating rafts growing wakame seaweed and oysters, small boats tending them. ${STYLE}` },
  { key: 'fishery-kanto', spotlight: '漁業：関東',
    prompt: `Tokyo bay fishery: nori seaweed nets standing in shallow water at low tide, a fishing boat harvesting, a big port with cranes far behind. ${STYLE}` },
  { key: 'fishery-chubu', spotlight: '漁業：中部',
    prompt: `Suruga bay fishery: tiny pink sakura shrimp and translucent whitebait spread out to dry on nets by the shore, deep blue bay and a snow-capped volcano behind. ${STYLE}` },
  { key: 'fishery-kinki', spotlight: '漁業：近畿',
    prompt: `Kinki fishery: pearl-farming rafts floating in a quiet indented bay, an opened oyster shell showing a round pearl in the foreground, forested capes around. ${STYLE}` },
  { key: 'fishery-chugoku', spotlight: '漁業：中国',
    prompt: `Seto inland sea oyster farming: long wooden rafts with hanging ropes of oysters, calm water with small green islands, a boat pulling up a rope thick with shells. ${STYLE}` },
  { key: 'fishery-shikoku', spotlight: '漁業：四国',
    prompt: `Tosa bay fishery: fishermen pole-and-line fishing for skipjack tuna from a boat, big silvery fish flying through spray, bright blue Pacific ocean. ${STYLE}` },
  { key: 'fishery-kyushu', spotlight: '漁業：九州・沖縄',
    prompt: `Kyushu fishery: wide tidal flats of the Ariake sea at low tide with nori seaweed nets on poles, small flat boats, and a warm coral-reef sea in the far distance. ${STYLE}` },

  // ── 工業（「工業」タブ用）──
  { key: 'industry-hokkaido', spotlight: '工業：北海道',
    prompt: `Hokkaido food-processing factory: clean bright production line filling milk bottles and packing butter and cheese, stainless steel tanks, workers in white caps. ${STYLE}` },
  { key: 'industry-tohoku', spotlight: '工業：東北',
    prompt: `Tohoku industry: a craftsman pouring molten iron into a mold to make a cast-iron kettle in a workshop, and a modern electronics assembly bench beside it. ${STYLE}` },
  { key: 'industry-kanto', spotlight: '工業：関東',
    prompt: `Kanto industry: a large printing press running rolls of paper inside a factory, and through the window a waterfront industrial zone with cranes and tanks. ${STYLE}` },
  { key: 'industry-chubu', spotlight: '工業：中部',
    prompt: `Chubu industry: a car assembly line with robot arms welding car bodies, rows of finished cars beyond, bright clean factory interior. ${STYLE}` },
  { key: 'industry-kinki', spotlight: '工業：近畿',
    prompt: `Kinki industry: a small neighborhood machine workshop, a skilled worker at a lathe shaping a precise metal part, tools neatly arranged on the wall. ${STYLE}` },
  { key: 'industry-chugoku', spotlight: '工業：中国',
    prompt: `Chugoku industry: a large petrochemical complex of pipes and tanks on reclaimed land beside a calm inland sea, and a ship under construction in a dock nearby. ${STYLE}` },
  { key: 'industry-shikoku', spotlight: '工業：四国',
    prompt: `Shikoku industry: a paper mill with huge rolls of white paper, and beside it a loom weaving soft white towels, warm daylight. ${STYLE}` },
  { key: 'industry-kyushu', spotlight: '工業：九州・沖縄',
    prompt: `Kyushu industry: engineers in white cleanroom suits handling a shiny silicon wafer of integrated circuits, and a steelworks with glowing molten metal seen in the background. ${STYLE}` },
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
// Gemini は JPEG を返すことがあるため、sharp が使えるときは必ず PNG に統一する。
let sharpMod = null;
async function loadSharp() {
  if (sharpMod !== null) return sharpMod;
  try {
    sharpMod = (await import('sharp')).default;
  } catch {
    sharpMod = false; // 未インストール
  }
  return sharpMod;
}

async function toPng(buffer) {
  const sharp = await loadSharp();
  if (!sharp) return null; // 変換不可
  return sharp(buffer)
    .resize(640, 640, { fit: 'cover' })
    .png({ compressionLevel: 9, quality: 82 })
    .toBuffer();
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

  const force = process.argv.includes('--force');
  for (const p of PRODUCTS) {
    const outPath = path.join(OUT_DIR, `${p.key}.png`);
    // すでにあるものは作り直さない。作り直すと既存の絵が別物に変わってしまうため。
    if (!force && fs.existsSync(outPath)) {
      console.log(`Skip ${p.key} (already exists)`);
      continue;
    }
    process.stdout.write(`Generating ${p.key} (${p.spotlight})... `);
    try {
      const raw = await generateImage(apiKey, modelId, p.prompt);
      const png = await toPng(raw);
      fs.writeFileSync(outPath, png ?? raw);
      const kb = Math.round(fs.statSync(outPath).size / 1024);
      generated.add(p.key);
      console.log(`OK (${kb}KB${png ? ', png640' : ', raw'})`);
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
