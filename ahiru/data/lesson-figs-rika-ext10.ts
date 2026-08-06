// 中学受験理科 拡張バッチ ext10：X. 化学「もののとけ方」（溶解・濃度・溶解度・再結晶）
// rika_s336〜rika_s365（30セッション）に対応する動く図解。
// 既存の lesson-figs-rika.ts とは独立したファイル（キーは lf_rext10_ で始まり衝突しない）。

import type { Figure } from './figures';

export const lessonFigsRikaExt10: Record<string, Figure> = {
  // ===== rika_s336 とける・とけないと質量保存 =====
  lf_rext10_336: {
    kind: 'barChart',
    yLabel: '重さ(g)',
    bars: [
      { label: '水100g', value: 100 },
      { label: '食塩20g', value: 20 },
      { label: '食塩水120g', value: 120, color: '#16A34A' },
    ],
    caption: '水100g＋食塩20g＝食塩水120g。とけても粒は消えず、重さはそのまま合計される（質量保存）',
  },

  // ===== rika_s337 水溶液の均一性 =====
  lf_rext10_337: {
    kind: 'barChart',
    yLabel: '食塩の重さ(g)',
    yMax: 15,
    bars: [
      { label: '上部50gに含まれる食塩', value: 10 },
      { label: '下部50gに含まれる食塩', value: 10 },
    ],
    caption: '全体100g（食塩20g）の食塩水を上下50gずつに分けても、食塩はどちらも10gずつ均一に含まれる',
  },

  // ===== rika_s338 ろ過と水溶液 =====
  lf_rext10_338: {
    kind: 'barChart',
    yLabel: '重さ(g)',
    bars: [
      { label: '泥水', value: 150 },
      { label: 'ろ紙に残った泥', value: 2.5 },
      { label: 'ろ液', value: 147.5, color: '#16A34A' },
    ],
    caption: '泥水150g＝泥2.5g＋ろ液147.5g。食塩水はろ過しても何も残らず、全部が通り抜ける',
  },

  // ===== rika_s339 飽和水溶液の基礎 =====
  lf_rext10_339: {
    kind: 'barChart',
    yLabel: '食塩の重さ(g)',
    bars: [
      { label: '加えた食塩', value: 38 },
      { label: 'とけた分', value: 36 },
      { label: 'とけ残り', value: 2, color: '#E11D48' },
    ],
    caption: '38g加えても、この温度の水100gには36gまでしかとけず、2gはとけ残る（飽和）',
  },

  // ===== rika_s340 質量パーセント濃度の基本 =====
  lf_rext10_340: {
    kind: 'pieChart',
    slices: [
      { label: '食塩(溶質)20g', value: 20 },
      { label: '水(溶媒)80g', value: 80 },
    ],
    caption: '濃度＝20÷(20＋80)×100＝20％。分母は水だけでなく水溶液全体',
  },

  // ===== rika_s341 濃度と全体量から溶質量を求める =====
  lf_rext10_341: {
    kind: 'pieChart',
    slices: [
      { label: '食塩45g', value: 45 },
      { label: '水255g', value: 255 },
    ],
    caption: '15％の食塩水300g＝食塩45g＋水255g（300×0.15＝45）',
  },

  // ===== rika_s342 濃度と溶質量から水を求める =====
  lf_rext10_342: {
    kind: 'pieChart',
    slices: [
      { label: '食塩45g', value: 45 },
      { label: '水330g', value: 330 },
    ],
    caption: '食塩45gで12％にするには水溶液全体375g（45÷0.12）必要＝水は330g（375－45）',
  },

  // ===== rika_s343 蒸発で濃度を上げる =====
  lf_rext10_343: {
    kind: 'barChart',
    yLabel: '重さ(g)',
    bars: [
      { label: '蒸発前400g(10%・食塩40g)', value: 400 },
      { label: '蒸発後160g(25%・食塩40g)', value: 160 },
      { label: '蒸発させた水', value: 240, color: '#E11D48' },
    ],
    caption: '食塩40gは変わらず、水だけが240g減って全体が160gになると25％になる',
  },

  // ===== rika_s344 水を加えて濃度を薄める =====
  lf_rext10_344: {
    kind: 'barChart',
    yLabel: '重さ(g)',
    bars: [
      { label: '加える前150g(20%・食塩30g)', value: 150 },
      { label: '加えた後375g(8%・食塩30g)', value: 375, color: '#16A34A' },
      { label: '加えた水', value: 225, color: '#0EA5E9' },
    ],
    caption: '食塩30gは変わらず、水を225g加えると全体375gで8％になる',
  },

  // ===== rika_s345 濃度の異なる水溶液を混ぜる =====
  lf_rext10_345: {
    kind: 'barChart',
    yLabel: '濃度(%)',
    bars: [
      { label: '5%食塩水200g', value: 5 },
      { label: '20%食塩水100g', value: 20 },
      { label: '混ぜた後300g', value: 10, color: '#16A34A' },
    ],
    caption: '単純平均(5+20)÷2＝12.5％ではない。食塩の重さ(10g＋20g＝30g)÷全体300g×100＝10％',
  },

  // ===== rika_s346 溶解度の定義（水100gあたりへの換算） =====
  lf_rext10_346: {
    kind: 'barChart',
    yLabel: '食塩の重さ(g)',
    bars: [
      { label: '水50gにとけた量', value: 18 },
      { label: '水100gあたりに換算', value: 36, color: '#16A34A' },
    ],
    caption: '溶解度は必ず「水100gあたり」の値。水50gで18gとけたら、100gあたりは36gに換算する',
  },

  // ===== rika_s347 溶解度曲線の読み方（硝酸カリウム） =====
  lf_rext10_347: {
    kind: 'lineChart',
    xLabel: '温度(℃)',
    yLabel: '溶解度(g/水100g)',
    xRange: [10, 90],
    series: [
      {
        label: '硝酸カリウム',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 20, y: 32 },
          { x: 40, y: 64 },
          { x: 60, y: 110 },
          { x: 80, y: 170 },
        ],
      },
    ],
    caption: '60℃の溶解度は110g。80gとかした水溶液はあと30g(110－80)とける。40℃の64gと読み違えないこと',
  },

  // ===== rika_s348 溶解度と水の量の比例 =====
  lf_rext10_348: {
    kind: 'barChart',
    yLabel: '硝酸カリウムの重さ(g)',
    bars: [
      { label: '水100gにとける量', value: 32 },
      { label: '水250gにとける量', value: 80, color: '#16A34A' },
    ],
    caption: '水の量が2.5倍になれば、とける最大量も2.5倍（32×2.5＝80）',
  },

  // ===== rika_s349 硝酸カリウムとミョウバンの比較 =====
  lf_rext10_349: {
    kind: 'lineChart',
    xLabel: '温度(℃)',
    yLabel: '溶解度(g/水100g)',
    xRange: [15, 65],
    series: [
      { label: '硝酸カリウム', color: '#0EA5E9', markers: true, points: [{ x: 20, y: 32 }, { x: 60, y: 110 }] },
      { label: 'ミョウバン', color: '#E11D48', markers: true, points: [{ x: 20, y: 11 }, { x: 60, y: 57 }] },
    ],
    caption: '20℃→60℃の増加量：硝酸カリウムは78g(110－32)、ミョウバンは46g(57－11)。硝酸カリウムの方が増加が大きい',
  },

  // ===== rika_s350 食塩の溶解度曲線（変化が小さい） =====
  lf_rext10_350: {
    kind: 'lineChart',
    xLabel: '温度(℃)',
    yLabel: '溶解度(g/水100g)',
    xRange: [15, 65],
    yRange: [0, 120],
    series: [
      { label: '食塩', color: '#16A34A', markers: true, points: [{ x: 20, y: 36 }, { x: 60, y: 37 }] },
      { label: '硝酸カリウム(比較用)', color: '#0EA5E9', dashed: true, markers: true, points: [{ x: 20, y: 32 }, { x: 60, y: 110 }] },
    ],
    caption: '食塩の線はほぼ水平（37→36で1gしか変わらない）。硝酸カリウムの急な線と対照的',
  },

  // ===== rika_s351 溶解度曲線からとけ残り量を読み取る =====
  lf_rext10_351: {
    kind: 'barChart',
    yLabel: 'ミョウバンの重さ(g)',
    bars: [
      { label: '加えたミョウバン', value: 30 },
      { label: '40℃でとける限度', value: 24 },
      { label: 'とけ残り', value: 6, color: '#E11D48' },
    ],
    caption: '40℃の溶解度は24g。30g入れても24gまでしかとけず、6gはとけ残る',
  },

  // ===== rika_s352 再結晶の基本原理（硝酸カリウム） =====
  lf_rext10_352: {
    kind: 'barChart',
    yLabel: '硝酸カリウムの重さ(g)',
    bars: [
      { label: '80℃でとけていた量', value: 170 },
      { label: '20℃でとける限度', value: 32 },
      { label: '出てくる結晶', value: 138, color: '#E11D48' },
    ],
    caption: '結晶＝170－32＝138g。170g全部が結晶になるわけではなく、32gは水にとけたまま残る',
  },

  // ===== rika_s353 冷却計算（ミョウバン、水100gそのまま） =====
  lf_rext10_353: {
    kind: 'barChart',
    yLabel: 'ミョウバンの重さ(g)',
    bars: [
      { label: '60℃でとけていた量', value: 57 },
      { label: '20℃でとける限度', value: 11 },
      { label: '出てくる結晶', value: 46, color: '#E11D48' },
    ],
    caption: '結晶＝57－11＝46g。温度の比(20/60)を溶解度に掛けてはいけない',
  },

  // ===== rika_s354 水の量が100gでない場合の冷却計算 =====
  lf_rext10_354: {
    kind: 'barChart',
    yLabel: '硝酸カリウムの重さ(g)',
    bars: [
      { label: '80℃でとけた量(水50g)', value: 85 },
      { label: '20℃でとける限度(水50g)', value: 16 },
      { label: '出てくる結晶', value: 69, color: '#E11D48' },
    ],
    caption: '水が50gなので溶解度をすべて0.5倍：170×0.5＝85g、32×0.5＝16g、結晶＝85－16＝69g',
  },

  // ===== rika_s355 飽和水溶液の重さから溶質量を逆算 =====
  lf_rext10_355: {
    kind: 'pieChart',
    slices: [
      { label: '食塩54g', value: 54 },
      { label: '水150g', value: 150 },
    ],
    caption: '20℃の飽和食塩水204g＝食塩54g＋水150g（水100g:食塩36g＝136の1.5倍）',
  },

  // ===== rika_s356 不純物を含む物質の再結晶 =====
  lf_rext10_356: {
    kind: 'barChart',
    yLabel: '重さ(g)',
    bars: [
      { label: '純粋な硝酸カリウム', value: 95 },
      { label: '20℃でとける限度', value: 32 },
      { label: '出てくる結晶(ほぼ純粋)', value: 63, color: '#E11D48' },
    ],
    caption: '食塩5gは20℃でも36gまでとけるので、とけたまま結晶に混ざらない。結晶＝95－32＝63g',
  },

  // ===== rika_s357 再結晶の入試応用（飽和水溶液420gから） =====
  lf_rext10_357: {
    kind: 'barChart',
    yLabel: '硝酸カリウムの重さ(g)',
    bars: [
      { label: '60℃飽和水溶液中の硝酸カリウム', value: 220 },
      { label: '20℃でとける限度(水200g)', value: 64 },
      { label: '出てくる結晶', value: 156, color: '#E11D48' },
    ],
    caption: '420g＝水200g＋硝酸カリウム220g。20℃でとける限度は水の量(200g)を基準に32×2＝64g。結晶＝220－64＝156g',
  },

  // ===== rika_s358 蒸発による結晶取り出しの基本原理 =====
  lf_rext10_358: {
    kind: 'barChart',
    yLabel: '食塩の重さ(g)',
    bars: [
      { label: 'とけていた食塩', value: 15 },
      { label: '水30gでとける限度', value: 10.8 },
      { label: '出てくる結晶', value: 4.2, color: '#E11D48' },
    ],
    caption: '蒸発しても食塩の量は15gのまま変わらない。水30gの限度10.8gを超えた4.2gが結晶になる',
  },

  // ===== rika_s359 蒸発で結晶を出す計算（飽和状態から） =====
  lf_rext10_359: {
    kind: 'barChart',
    yLabel: '食塩の重さ(g)',
    bars: [
      { label: 'もとの食塩(飽和)', value: 90 },
      { label: '蒸発後の水でとける限度', value: 54 },
      { label: '出てくる結晶', value: 36, color: '#E11D48' },
    ],
    caption: '水250g→150gに蒸発。とける限度は90g→54gに下がり、36gが結晶として出る',
  },

  // ===== rika_s360 蒸発量を結晶量から逆算 =====
  lf_rext10_360: {
    kind: 'barChart',
    yLabel: '重さ(g)',
    bars: [
      { label: '蒸発させた水', value: 25, color: '#0EA5E9' },
      { label: '出てくる結晶', value: 9, color: '#E11D48' },
    ],
    caption: '水100gを蒸発させると食塩36gが結晶になる比率なので、9g出るには水25g(9×100÷36)を蒸発させる',
  },

  // ===== rika_s361 蒸発と冷却の使い分け =====
  lf_rext10_361: {
    kind: 'barChart',
    yLabel: '出てくる結晶(g)',
    bars: [
      { label: '硝酸カリウム(冷却80→20℃)', value: 138 },
      { label: '食塩(冷却80→20℃)', value: 2, color: '#E11D48' },
    ],
    caption: '同じ冷却でも硝酸カリウムは138g出るが食塩はわずか2g。食塩には冷却より蒸発が向いている',
  },

  // ===== rika_s362 濃度と溶解度の複合 =====
  lf_rext10_362: {
    kind: 'pieChart',
    slices: [
      { label: 'とけている硝酸カリウム25g', value: 25 },
      { label: '水100g', value: 100 },
    ],
    caption: '濃度＝25÷125×100＝20％。20℃の限度32gまであと7g(32－25)とける',
  },

  // ===== rika_s363 グラフ読み取り＋再結晶複合（ミョウバン） =====
  lf_rext10_363: {
    kind: 'lineChart',
    xLabel: '温度(℃)',
    yLabel: '溶解度(g/水100g)',
    xRange: [15, 65],
    series: [
      {
        label: 'ミョウバン',
        color: '#E11D48',
        markers: true,
        points: [
          { x: 20, y: 11 },
          { x: 40, y: 24 },
          { x: 60, y: 57 },
        ],
      },
    ],
    caption: '60℃の溶解度は57g（40℃の24gと読み違えない）。水150gなら57×1.5＝85.5g、20℃では11×1.5＝16.5g、結晶＝69g',
  },

  // ===== rika_s364 蒸発と冷却の複合計算 =====
  lf_rext10_364: {
    kind: 'barChart',
    yLabel: '硝酸カリウムの重さ(g)',
    bars: [
      { label: '60℃でとけていた量(水150g)', value: 165 },
      { label: '蒸発後20℃でとける限度(水100g)', value: 32 },
      { label: '出てくる結晶', value: 133, color: '#E11D48' },
    ],
    caption: '水150g→蒸発後100g。60℃の165g(110×1.5)から、20℃・水100gの限度32gを引く。結晶＝133g',
  },

  // ===== rika_s365 総合まとめ =====
  lf_rext10_365: {
    kind: 'barChart',
    yLabel: '食塩の重さ(g)',
    bars: [
      { label: 'とかした食塩', value: 100 },
      { label: '300gの水でとける最大量', value: 108, color: '#16A34A' },
      { label: '飽和まであと', value: 8, color: '#0EA5E9' },
    ],
    caption: '水300gの限度は36×3＝108g。100g<108gなので全部とける。濃度は100÷400×100＝25％',
  },
};
