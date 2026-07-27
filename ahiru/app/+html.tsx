import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';

// Web（静的書き出し）の HTML シェル。検索に強くするため、
// <title>・description・keywords を「中学受験・高校受験」先頭で設定する。
// 各画面共通のドキュメントヘッドになる。
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title>中学受験・高校受験の対策アプリ｜Zaibase受験 5科目13,000問＋動く図解</title>
        <meta
          name="description"
          content="中学受験・高校受験の対策アプリ。算数・国語・理科・社会・英語の5科目13,000問以上、灘・開成・慶應など40校以上に対応、図形やグラフが動く図解つき教科書とAI弱点コーチ。無料で今すぐ始められます。"
        />
        <meta
          name="keywords"
          content="中学受験,高校受験,受験対策,過去問,入試対策,問題集,勉強アプリ,自宅学習,灘,開成,慶應,早稲田,四天王寺,大阪桐蔭,日比谷,東大寺学園,甲陽学院,西大和学園,英検,動く図解"
        />

        <meta property="og:title" content="中学受験・高校受験の対策アプリ｜Zaibase受験" />
        <meta
          property="og:description"
          content="中学受験・高校受験対策。5科目13,000問以上・40校以上に対応・動く図解つき教科書・AI弱点コーチ。無料で始められます。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="中学受験・高校受験の対策アプリ｜Zaibase受験" />

        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
