#!/usr/bin/env node
/**
 * Gemini（Nano Banana Pro / Flash Image）で ahiru 用の歴史イラストを生成します。
 *
 * 使い方:
 *   export GEMINI_API_KEY="your-key"   # https://aistudio.google.com/apikey
 *   node scripts/generate-history-images.mjs
 *   node scripts/generate-history-images.mjs --model pro   # Nano Banana Pro
 *
 * モデル:
 *   flash → gemini-3.1-flash-image（Nano Banana 2、高速）
 *   pro   → gemini-3-pro-image-preview（Nano Banana Pro、高品質・甲冑ディテール向き）
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '../assets/history');

const MODELS = {
  flash: 'gemini-3.1-flash-image-preview',
  pro: 'gemini-3-pro-image-preview',
};

/** @type {Record<string, string>} */
const PROMPTS = {
  'hist-samurai-armor.png': `Create a square anime-style educational illustration for a Japanese middle school history app.
A fictional Sengoku/Edo era samurai commander in full ornate o-yoroi armor on a battlefield hill, red and black lacquered plates, kabuto helmet with crest, katana drawn, war banners and castle in background.
Dynamic heroic pose, cinematic sunset lighting, highly detailed armor texture.
ORIGINAL fictional character — do NOT depict any real historical person's likeness or photograph.
No text, no watermark, no logo.`,

  'hist-sekigahara-battle.png': `Create a square epic anime-style battle scene for Japanese history education.
Sengoku period warriors in full samurai armor clashing at a large field battle, spears, gun smoke, banners, dramatic sky.
Stylized original fictional soldiers only — NOT based on photos of real people.
Rich armor detail (yoroi, kabuto), dynamic action composition, vibrant colors like premium anime key visual.
No text, no watermark.`,

  'hist-edo.png': `Same as samurai armor theme: Edo period daimyo in battle-ready armor overlooking town, anime educational style, fictional character, square, no text.`,

  'hist-ancient.png': `Square anime illustration: fictional ancient Japanese court noble in Asuka/Nara period robes, temple silhouette, gold and purple palette, educational app art, no text, original character.`,

  'hist-meiji.png': `Square anime illustration: fictional Meiji era Japanese student in hakama and western cap, cherry blossoms, educational history theme, no text, original character.`,

  'hist-geography.png': `Square anime illustration: young explorer with map of Japan, mountains rivers compass, geography education theme, bright colors, no text.`,

  'hist-modern.png': `Square anime illustration: modern Japan democracy theme, fictional character, parliament silhouette, constitution scroll icon, civics education, no text.`,
};

async function generateImage(apiKey, modelId, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`;

  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseModalities: ['TEXT', 'IMAGE'],
    },
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gemini API ${res.status}: ${errText}`);
  }

  const data = await res.json();
  const parts = data.candidates?.[0]?.content?.parts ?? [];

  for (const part of parts) {
    if (part.inlineData?.data) {
      return Buffer.from(part.inlineData.data, 'base64');
    }
  }

  throw new Error('No image in response');
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY を設定してください: https://aistudio.google.com/apikey');
    process.exit(1);
  }

  const modelArg = process.argv.includes('--model') ? process.argv[process.argv.indexOf('--model') + 1] : 'pro';
  const modelId = MODELS[modelArg] ?? MODELS.pro;

  fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log(`Model: ${modelId} (Nano Banana ${modelArg === 'pro' ? 'Pro' : '2'})`);
  console.log(`Output: ${OUT_DIR}\n`);

  for (const [filename, prompt] of Object.entries(PROMPTS)) {
    const outPath = path.join(OUT_DIR, filename);
    process.stdout.write(`Generating ${filename}... `);
    try {
      const buffer = await generateImage(apiKey, modelId, prompt);
      fs.writeFileSync(outPath, buffer);
      console.log('OK');
    } catch (err) {
      console.log('FAILED');
      console.error(`  ${err.message}`);
    }
    await new Promise((r) => setTimeout(r, 2000));
  }

  console.log('\nDone. Reload the app to see new images.');
}

main();
