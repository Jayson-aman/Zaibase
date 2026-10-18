// Expo 既定の Metro 設定に、Web バンドルの圧縮設定だけを足す。
//
// なぜ必要か：
//   Metro の minifier（terser）は既定で `ascii_only: true` になっていて、日本語を
//   1文字ずつ `\uXXXX`（6バイト）に展開する。この教材は本文のほぼ全部が日本語なので、
//   元の TypeScript（UTF-8 で 3 バイト/文字）より出力の方が大きくなり、Web 版の
//   JS が 200MB を超えていた（うち 170MB がこのエスケープ）。UTF-8 のまま出せば半分になる。
//   HTML は <meta charset="utf-8"> で配信され、Vercel も UTF-8 で返すので表示は変わらない。
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer = {
  ...config.transformer,
  minifierConfig: {
    ...(config.transformer?.minifierConfig ?? {}),
    output: {
      ...(config.transformer?.minifierConfig?.output ?? {}),
      ascii_only: false,
    },
  },
};

module.exports = config;
