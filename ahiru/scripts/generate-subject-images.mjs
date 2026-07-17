#!/usr/bin/env node
/**
 * Gemini（Nano Banana Pro / Flash Image）で ahiru の理科・歴史・公民の
 * 「単元イラスト」を生成します。
 *
 * これらは実写ではなく、教育向けのオリジナル・イラストです
 * （実在人物・実在ロゴ・実在写真は描きません）。
 *
 * 使い方:
 *   export GEMINI_API_KEY="your-key"   # https://aistudio.google.com/apikey
 *   node scripts/generate-subject-images.mjs            # Nano Banana Pro
 *   node scripts/generate-subject-images.mjs --model flash
 *
 * 生成後、assets/subjects/ にPNGが保存され、data/subjectImages.ts の
 * rikaImages / historyImages / civicsImages マップが自動更新されます。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '../assets/subjects');
const DATA_TS = path.join(__dirname, '../data/subjectImages.ts');

const MODELS = {
  flash: 'gemini-3.1-flash-image-preview',
  pro: 'gemini-3-pro-image-preview',
};

const SCI_STYLE =
  'Bright, clean, friendly educational illustration for a Japanese elementary/junior-high science app. ' +
  'Clear labeled-diagram feel, soft shading, accurate and easy to understand. Square composition. ' +
  'NO text labels, NO logos, NO real photos, NO watermark. Original illustration only.';
const HIST_STYLE =
  'Warm anime-style educational illustration for a Japanese history app. ' +
  'Original fictional characters only — do NOT depict any real historical person or photograph. ' +
  'Rich period detail, cinematic light, square composition. NO text, NO logo, NO watermark.';
const CIV_STYLE =
  'Clean, friendly educational illustration for a Japanese civics (society) app. ' +
  'Simple modern flat-illustration style, clear symbolic composition. Square. ' +
  'NO text, NO real people, NO logos, NO watermark. Original illustration only.';

// map: themeId (data/subjectImages.ts と一致) → { file, prompt }
const RIKA = {
  rika_human_body: `Cutaway diagram-style illustration of the human digestive and circulatory system inside a friendly child's silhouette, heart, lungs, stomach, intestines in soft colors. ${SCI_STYLE}`,
  rika_plant: `A plant cross-section showing roots, stem, leaves and a flower, with tiny arrows suggesting water flow and sunlight, green and cheerful. ${SCI_STYLE}`,
  rika_creatures: `A pond scene with a butterfly life cycle (egg, caterpillar, chrysalis, butterfly) and medaka fish and a frog, bright and clear. ${SCI_STYLE}`,
  rika_space: `The solar system and Earth, Moon phases and a starry sky with a bright sun, deep blue space, kid-friendly. ${SCI_STYLE}`,
  rika_weather: `Weather diagram: clouds, a warm and cold front, sun and rain, thermometer, over a landscape, clear and colorful. ${SCI_STYLE}`,
  rika_chem: `Science lab beakers and test tubes with colorful liquids, litmus paper turning red and blue, bubbles of gas, safe and bright. ${SCI_STYLE}`,
  rika_electric: `A simple electric circuit with a battery, wires and a glowing light bulb, plus a magnet with iron filings pattern, cheerful. ${SCI_STYLE}`,
  rika_force: `A lever balancing weights, a pendulum, a spring with a weight and a pulley, showing forces, clear diagram style. ${SCI_STYLE}`,
  rika_light_sound: `Light passing through a convex lens and a prism making a rainbow, plus sound waves from a bell, bright and clear. ${SCI_STYLE}`,
  rika_earth: `A cutaway of rock strata (geological layers) with fossils, a smoking volcano and a river valley, earthy colors. ${SCI_STYLE}`,
};
const HIST = {
  hist_jomon: `A Jomon/Yayoi era village with pit dwellings, raised-floor rice granary, people making pottery and planting rice, dawn light. ${HIST_STYLE}`,
  hist_kofun: `An Asuka-period scene: a large keyhole-shaped kofun burial mound and a fictional prince in ancient robes near a wooden temple. ${HIST_STYLE}`,
  hist_nara: `A Nara-period scene: a giant bronze Buddha statue in a great wooden temple hall, monks and nobles in Tenpyo robes. ${HIST_STYLE}`,
  hist_heian: `A Heian-period elegant court scene: nobles in juni-hitoe kimono, a garden, writing kana poetry, refined pastel palette. ${HIST_STYLE}`,
  hist_kamakura: `A Kamakura-period scene: fictional samurai on horseback as go-kenin, a temple gate with fierce guardian statues, autumn. ${HIST_STYLE}`,
  hist_muromachi: `A Sengoku-period scene: fictional warlords in armor, matchlock guns and banners on a battlefield, a golden pavilion in the distance. ${HIST_STYLE}`,
  hist_edo: `An Edo-period town scene: merchants and townsfolk, a castle, a daimyo procession (sankin-kotai), ukiyo-e color palette. ${HIST_STYLE}`,
  hist_meiji: `A Meiji-era scene of civilization and enlightenment: fictional students in hakama and western caps, gas lamps, a steam train, cherry blossoms. ${HIST_STYLE}`,
  hist_modern_war: `A Taisho/early-Showa city street with modern-boy and modern-girl fashion, trams and brick buildings, nostalgic sepia-tinged color. ${HIST_STYLE}`,
  hist_postwar: `A postwar reconstruction and high-growth-era Japan scene: fictional family, new buildings, Tokyo tower silhouette, hopeful bright light. ${HIST_STYLE}`,
};
const CIV = {
  civ_constitution: `A friendly symbolic illustration of a constitution scroll with three pillars labeled by icons (sovereignty=people, peace=dove, human rights=hands), soft colors. ${CIV_STYLE}`,
  civ_diet: `A stylized Japanese Diet building with two chambers and a cabinet table, simple flat vector look, blue and cream. ${CIV_STYLE}`,
  civ_court: `A stylized courthouse with scales of justice and a gavel, three tiers suggesting a three-instance system, calm colors. ${CIV_STYLE}`,
  civ_election: `A cheerful illustration of a ballot box, a voting slip and diverse citizens voting, bright civic colors. ${CIV_STYLE}`,
  civ_economy: `A simple supply-and-demand market illustration with coins, a bank building, goods and price tags, flat modern style. ${CIV_STYLE}`,
  civ_intl: `A globe surrounded by symbols of international cooperation (dove, handshake, green leaf for SDGs), friendly flat style. ${CIV_STYLE}`,
};

async function generateImage(apiKey, modelId, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
    }),
  });
  if (!res.ok) throw new Error(`Gemini API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const parts = data.candidates?.[0]?.content?.parts ?? [];
  for (const part of parts) if (part.inlineData?.data) return Buffer.from(part.inlineData.data, 'base64');
  throw new Error('No image in response');
}

function updateMap(varName, ids) {
  let src = fs.readFileSync(DATA_TS, 'utf8');
  const lines = ids.map((id) => `  ${id}: require('../assets/subjects/${id}.png'),`);
  const body = ids.length ? `{\n${lines.join('\n')}\n}` : '{}';
  const re = new RegExp(`export const ${varName}: Record<string, ImageSourcePropType> = \\{[\\s\\S]*?\\};`);
  src = src.replace(re, `export const ${varName}: Record<string, ImageSourcePropType> = ${body};`);
  fs.writeFileSync(DATA_TS, src, 'utf8');
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
  console.log(`Model: ${modelId}\nOutput: ${OUT_DIR}\n`);

  const groups = [
    { name: 'rikaImages', map: RIKA },
    { name: 'historyImages', map: HIST },
    { name: 'civicsImages', map: CIV },
  ];

  for (const g of groups) {
    const done = [];
    for (const [id, prompt] of Object.entries(g.map)) {
      const outPath = path.join(OUT_DIR, `${id}.png`);
      if (fs.existsSync(outPath)) {
        done.push(id);
      }
      process.stdout.write(`Generating ${id}... `);
      try {
        const buffer = await generateImage(apiKey, modelId, prompt);
        fs.writeFileSync(outPath, buffer);
        if (!done.includes(id)) done.push(id);
        console.log('OK');
      } catch (err) {
        console.log('FAILED');
        console.error(`  ${err.message}`);
      }
      await new Promise((r) => setTimeout(r, 2000));
    }
    updateMap(g.name, done);
    console.log(`-> ${g.name}: ${done.length}/${Object.keys(g.map).length}\n`);
  }
  console.log('Done. data/subjectImages.ts を更新しました。アプリを再読み込みしてください。');
}

main();
