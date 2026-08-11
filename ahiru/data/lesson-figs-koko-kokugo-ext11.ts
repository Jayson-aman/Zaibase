import type { Figure } from './figures';

// 高校受験 国語「資料の読み取り・話し合い・作文（公立入試の新傾向）」拡張ユニット
// （koko_kokugo_s376〜koko_kokugo_s410）の図解。
// キーは lessons-koko-kokugo-ext11.ts の figureId と対応。
// このユニットは「資料そのものを読ませる」ことが学習内容なので、
// レッスン本文で扱う調査結果を barChart・lineChart・pieChart で実際に作図してある。
// 数値はすべて本文・ひっかけ問題の記述と一致させ、合計・割合を検算済み（35課中18課に付与）。
export const lessonFigsKokoKokugoExt11: Record<string, Figure> = {
  // s376：グラフを見る手順（題名・単位・最大最小・変化）
  lf_kokokokugoext11_376: {
    kind: 'barChart',
    xLabel: '一日の読書時間',
    yLabel: '割合（％）',
    yMax: 45,
    bars: [
      { label: '読まない', value: 38, color: '#0369A1' },
      { label: '30分未満', value: 24, color: '#0EA5E9' },
      { label: '30分〜1時間', value: 21, color: '#0284C7' },
      { label: '1〜2時間', value: 12, color: '#38BDF8' },
      { label: '2時間以上', value: 5, color: '#7DD3FC' },
    ],
    caption:
      '中学生が一日に読書する時間（単位は％・合計100％）。最も多いのは「読まない」の38％だが、これは過半数ではない。読む生徒は24＋21＋12＋5＝62％で、読まない生徒より多い。最大の項目＝半数以上、と早合点しないこと',
  },

  // s377：折れ線で「変化」を読む（落ちこみと回復）
  lf_kokokokugoext11_377: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '貸出冊数（千冊）',
    xRange: [2019, 2024],
    yRange: [0, 70],
    series: [
      {
        label: '年間貸出冊数',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 2019, y: 52 },
          { x: 2020, y: 38 },
          { x: 2021, y: 47 },
          { x: 2022, y: 51 },
          { x: 2023, y: 55 },
          { x: 2024, y: 63 },
        ],
      },
    ],
    caption:
      '市立図書館の年間貸出冊数（単位・千冊）。2019年→2020年に14千冊減り、その後は毎年増加。増加量が最大なのは2020→2021年の9千冊。「年々増加している」と書くと誤り。単位が千冊なので2024年は6万3千冊',
  },

  // s378：円グラフで「割合」を読む（合計・過半数の判定）
  lf_kokokokugoext11_378: {
    kind: 'pieChart',
    slices: [
      { label: '動画サイト・SNS 41%', value: 41, color: '#0EA5E9' },
      { label: 'テレビ 33%', value: 33, color: '#0369A1' },
      { label: 'ニュースアプリ 15%', value: 15, color: '#0284C7' },
      { label: '新聞 6%', value: 6, color: '#38BDF8' },
      { label: 'ラジオ・その他 5%', value: 5, color: '#94A3B8' },
    ],
    caption:
      '中学生がニュースを知る手段（単一回答・合計100％）。動画サイト・SNSとテレビで41＋33＝74％。一方、テレビとニュースアプリは33＋15＝48％で半数に届かない。面積の印象ではなく、必ず足し算で判定する',
  },

  // s379：表を読む（一人あたりと合計の逆転）
  lf_kokokokugoext11_379: {
    kind: 'barChart',
    xLabel: '学校',
    yLabel: '一人あたり年間貸出冊数（冊）',
    yMax: 18,
    bars: [
      { label: 'A中 320人', value: 12.4, color: '#0EA5E9' },
      { label: 'B中 450人', value: 9.8, color: '#0369A1' },
      { label: 'C中 210人', value: 15.2, color: '#0284C7' },
      { label: 'D中 500人', value: 7.6, color: '#38BDF8' },
    ],
    caption:
      '4校の一人あたり年間貸出冊数。棒が最も高いのはC中(15.2冊)だが、生徒数をかけた合計はA3968冊・B4410冊・C3192冊・D3800冊でB中が最多。全体の一人あたりは15370÷1480＝約10.4冊で、単純平均11.25冊とは一致しない',
  },

  // s380：割合は下がっている（同じ数値の割合グラフ）
  lf_kokokokugoext11_380: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '部活動加入率（％）',
    xRange: [2020, 2024],
    yRange: [0, 100],
    series: [
      {
        label: '加入率',
        color: '#DC2626',
        markers: true,
        points: [
          { x: 2020, y: 78 },
          { x: 2021, y: 76 },
          { x: 2022, y: 74 },
          { x: 2023, y: 72 },
          { x: 2024, y: 70 },
        ],
      },
    ],
    caption:
      '部活動に入っている生徒の「割合」。78％から70％へ8ポイント低下している。ただしこれは割合の話で、人数の増減はこのグラフだけでは判断できない。なお78→70は「8％ポイント減」で、減少率は約10.3％',
  },

  // s380b：人数は増えている（同じ調査を実数で描き直す）
  lf_kokokokugoext11_380b: {
    kind: 'barChart',
    xLabel: '年',
    yLabel: '部員数（人）',
    yMax: 400,
    bars: [
      { label: '2020年', value: 312, color: '#0EA5E9' },
      { label: '2021年', value: 323, color: '#0EA5E9' },
      { label: '2022年', value: 333, color: '#0284C7' },
      { label: '2023年', value: 342, color: '#0369A1' },
      { label: '2024年', value: 350, color: '#0369A1' },
    ],
    caption:
      '同じ調査を「人数」で描き直したもの。全校生徒数が400→425→450→475→500人と増えたため、400×0.78＝312人から500×0.70＝350人へ38人増加している。割合は下がり、人数は増える。両方に触れて書けると満点',
  },

  // s381：度数分布から言えること・言えないこと
  lf_kokokokugoext11_381: {
    kind: 'barChart',
    xLabel: '一週間の家庭学習時間（時間）',
    yLabel: '人数（人）',
    yMax: 16,
    histogram: true,
    bars: [
      { label: '0〜2', value: 4, color: '#7DD3FC' },
      { label: '2〜4', value: 9, color: '#38BDF8' },
      { label: '4〜6', value: 14, color: '#0EA5E9' },
      { label: '6〜8', value: 8, color: '#0284C7' },
      { label: '8〜10', value: 4, color: '#0369A1' },
      { label: '10〜12', value: 1, color: '#DC2626' },
    ],
    caption:
      'ある学級40人の一週間の家庭学習時間。4＋9＋14＋8＋4＋1＝40人で合計が合う。最頻値も中央値も4〜6時間の階級。右端の10〜12時間に1人いる（赤）ことを見落とすと「10時間以上はいない」と誤読する',
  },

  // s382：量の資料（スマホ使用時間・単一回答）
  lf_kokokokugoext11_382: {
    kind: 'pieChart',
    slices: [
      { label: '1時間未満 18%', value: 18, color: '#7DD3FC' },
      { label: '1〜2時間 27%', value: 27, color: '#38BDF8' },
      { label: '2〜3時間 25%', value: 25, color: '#0EA5E9' },
      { label: '3〜4時間 17%', value: 17, color: '#0284C7' },
      { label: '4時間以上 13%', value: 13, color: '#0369A1' },
    ],
    caption:
      '【資料A】中学生が一日にスマートフォンを使う時間（単一回答・合計100％）。2時間以上は25＋17＋13＝55％で、100－18－27＝55と検算しても一致する。この資料は「どれくらいの時間か」だけを示している',
  },

  // s382b：中身の資料（使い道・複数回答＝合計が100を超える）
  lf_kokokokugoext11_382b: {
    kind: 'barChart',
    xLabel: '主な使い道（複数回答）',
    yLabel: 'その項目を挙げた人の割合（％）',
    yMax: 80,
    bars: [
      { label: '動画視聴', value: 68, color: '#0369A1' },
      { label: 'SNS', value: 61, color: '#0284C7' },
      { label: 'ゲーム', value: 45, color: '#0EA5E9' },
      { label: '音楽', value: 39, color: '#38BDF8' },
      { label: '調べ物', value: 31, color: '#7DD3FC' },
      { label: '通話', value: 22, color: '#94A3B8' },
    ],
    caption:
      '【資料B】スマートフォンの主な使い道（複数回答）。合計は68＋61＋45＋39＋31＋22＝266％で100を超えるが誤植ではない。一人が複数に答えているため、項目を足して「〜割を占める」とは書けない。順位で述べること',
  },

  // s383：数値の変化（食べ残し量の推移）
  lf_kokokokugoext11_383: {
    kind: 'lineChart',
    xLabel: '年度',
    yLabel: '食べ残し量（kg／日）',
    xRange: [2019, 2024],
    yRange: [0, 45],
    series: [
      {
        label: '一日平均の食べ残し量',
        color: '#F59E0B',
        markers: true,
        points: [
          { x: 2019, y: 38 },
          { x: 2020, y: 35 },
          { x: 2021, y: 33 },
          { x: 2022, y: 30 },
          { x: 2023, y: 24 },
          { x: 2024, y: 19 },
        ],
      },
    ],
    caption:
      '【資料1】給食の食べ残し量（一日平均・kg）。38→19でちょうど半減。ただし前年度差は－3、－2、－3、－6、－5で一定ではなく、量を選べる制度が始まった2022年度の翌年から減り方が急になっている',
  },

  // s383b：理由の資料（食べ残しの理由・単一回答）
  lf_kokokokugoext11_383b: {
    kind: 'barChart',
    xLabel: '食べ残しの理由（単一回答）',
    yLabel: '割合（％）',
    yMax: 40,
    bars: [
      { label: '量が多い', value: 34, color: '#0369A1' },
      { label: '苦手な食べ物', value: 29, color: '#0284C7' },
      { label: '時間が足りない', value: 21, color: '#0EA5E9' },
      { label: '体調が悪い', value: 9, color: '#38BDF8' },
      { label: 'その他', value: 7, color: '#94A3B8' },
    ],
    caption:
      '【資料3】食べ残しの理由（34＋29＋21＋9＋7＝100％）。最多の「量が多い」34％には量を選べる制度が対応するが、「時間が足りない」21％は制度では解決しない。制度と数値の減少が同時でも、原因だと断定はできない',
  },

  // s384：行動の資料（参加経験の推移）
  lf_kokokokugoext11_384: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '参加したことがある生徒の割合（％）',
    xRange: [2020, 2024],
    yRange: [0, 70],
    series: [
      {
        label: '参加経験あり',
        color: '#16A34A',
        markers: true,
        points: [
          { x: 2020, y: 62 },
          { x: 2021, y: 58 },
          { x: 2022, y: 41 },
          { x: 2023, y: 48 },
          { x: 2024, y: 55 },
        ],
      },
    ],
    caption:
      '【資料1】「地域の行事に参加したことがある」生徒の割合。2022年に41％まで落ちこみ、2024年には55％まで回復した。ただし2020年の62％には戻っていない。最低の年だけを取り出して「地域離れ」と語らないこと',
  },

  // s384b：意識の資料（参加意欲）
  lf_kokokokugoext11_384b: {
    kind: 'pieChart',
    slices: [
      { label: 'とても思う 22%', value: 22, color: '#0369A1' },
      { label: 'まあ思う 39%', value: 39, color: '#0EA5E9' },
      { label: 'あまり思わない 27%', value: 27, color: '#94A3B8' },
      { label: '思わない 12%', value: 12, color: '#64748B' },
    ],
    caption:
      '【資料2】「地域の行事に参加したいと思うか」（2024年・単一回答）。前向きな回答は22＋39＝61％で6割を超える。行動（55％）と意識（61％）はそろえて述べるだけにし、61－55＝6％を「参加できなかった人」と読んではいけない',
  },

  // s385：相関はあるが因果は言えない資料
  lf_kokokokugoext11_385: {
    kind: 'barChart',
    xLabel: '読書量',
    yLabel: '一日のスマートフォン使用時間（時間）',
    yMax: 4,
    bars: [
      { label: '週に3冊以上', value: 1.4, color: '#0369A1' },
      { label: '週に1〜2冊', value: 2.1, color: '#0284C7' },
      { label: '月に数冊', value: 2.6, color: '#0EA5E9' },
      { label: 'ほとんど読まない', value: 3.3, color: '#38BDF8' },
    ],
    caption:
      '読書量別に見たスマートフォン使用時間。読む量が多い生徒ほど使用時間が短いという「関係」は読み取れる。しかしどちらが原因かは決められない（読書好きだから使わない／自由時間の量が両方に影響、なども考えられる）',
  },

  // s387：資料A（学年別のボランティア参加経験）
  lf_kokokokugoext11_387: {
    kind: 'barChart',
    xLabel: '学年',
    yLabel: '参加した経験がある生徒の割合（％）',
    yMax: 50,
    bars: [
      { label: '1年生', value: 31, color: '#7DD3FC' },
      { label: '2年生', value: 38, color: '#0EA5E9' },
      { label: '3年生', value: 44, color: '#0369A1' },
    ],
    caption:
      '【資料1】ボランティア活動に参加した経験がある生徒の割合（令和6年度）。学年が上がるほど増え、1年生31％から3年生44％へ13ポイント高い。数値を並べるだけでなく「学年が上がるほど増えている」と変化にまとめる',
  },

  // s387b：資料B（学校が紹介した活動件数の推移）
  lf_kokokokugoext11_387b: {
    kind: 'lineChart',
    xLabel: '年度',
    yLabel: '紹介した活動の件数（件）',
    xRange: [2020, 2024],
    yRange: [0, 30],
    series: [
      {
        label: '紹介件数',
        color: '#16A34A',
        markers: true,
        points: [
          { x: 2020, y: 8 },
          { x: 2021, y: 11 },
          { x: 2022, y: 15 },
          { x: 2023, y: 19 },
          { x: 2024, y: 24 },
        ],
      },
    ],
    caption:
      '【資料2】学校が紹介したボランティア活動の件数。8件から24件へ、5年間でちょうど3倍になっている。「二つの資料にそれぞれふれること」という条件では、資料1の％とこの件数の両方を答案に入れる必要がある',
  },

  // s390：多数決の前に確かめる意見の分布
  lf_kokokokugoext11_390: {
    kind: 'pieChart',
    slices: [
      { label: 'A案（劇）14人', value: 14, color: '#0369A1' },
      { label: 'B案（模擬店）11人', value: 11, color: '#0284C7' },
      { label: 'C案（展示）7人', value: 7, color: '#0EA5E9' },
      { label: '決めかねている 8人', value: 8, color: '#94A3B8' },
    ],
    caption:
      '文化祭の出し物についての意見（40人）。最多のA案も14÷40＝35％で過半数に届かず、他の案と保留を合わせると26人になる。「いちばん多いから決定」とせず、共通する目的を探し、保留の8人に理由をたずねる',
  },

  // s397：条件作文の材料（地域のためにできること）
  lf_kokokokugoext11_397: {
    kind: 'barChart',
    xLabel: '地域のためにできること（単一回答）',
    yLabel: '割合（％）',
    yMax: 40,
    bars: [
      { label: 'あいさつ', value: 31, color: '#0369A1' },
      { label: 'ごみ拾い', value: 26, color: '#0284C7' },
      { label: '行事の手伝い', value: 21, color: '#0EA5E9' },
      { label: '高齢者との交流', value: 13, color: '#38BDF8' },
      { label: '防災訓練', value: 9, color: '#7DD3FC' },
    ],
    caption:
      '中学生が「地域のためにできること」として挙げたこと（31＋26＋21＋13＋9＝100％）。上位2つで57％。作文では「最も多い」だけでなく「あいさつが31％で最も多い」と数値を入れて引用する',
  },

  // s398：変化を引用する（図書館の利用者数）
  lf_kokokokugoext11_398: {
    kind: 'lineChart',
    xLabel: '年度',
    yLabel: '一日平均利用者数（人）',
    xRange: [2019, 2024],
    yRange: [0, 65],
    series: [
      {
        label: '一日平均利用者数',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 2019, y: 42 },
          { x: 2020, y: 31 },
          { x: 2021, y: 35 },
          { x: 2022, y: 44 },
          { x: 2023, y: 52 },
          { x: 2024, y: 58 },
        ],
      },
    ],
    caption:
      '学校図書館の一日平均利用者数。2020年度の31人が最少で、2024年度は58人。58÷31＝1.87なので「1.8倍以上に増えた」と言える。「年々増加」は2019→2020年度に減っているので誤り。「一日平均」の語も落とさない',
  },

  // s399：二段落構成の材料（伝えることへの意識）
  lf_kokokokugoext11_399: {
    kind: 'pieChart',
    slices: [
      { label: '得意 9%', value: 9, color: '#0369A1' },
      { label: 'どちらかといえば得意 26%', value: 26, color: '#0284C7' },
      { label: 'どちらかといえば苦手 41%', value: 41, color: '#38BDF8' },
      { label: '苦手 24%', value: 24, color: '#94A3B8' },
    ],
    caption:
      '「自分の考えを人に伝えるのが得意ですか」（単一回答・合計100％）。苦手側は41＋24＝65％、得意側は9＋26＝35％。第一段落ではこの合計を事実として書き、「問題だと思う」などの評価は第二段落に回す',
  },

  // s400：体験を書く材料（話し合いで困ること）
  lf_kokokokugoext11_400: {
    kind: 'barChart',
    xLabel: '話し合いで困ること（単一回答）',
    yLabel: '割合（％）',
    yMax: 40,
    bars: [
      { label: '意見が思いつかない', value: 33, color: '#0369A1' },
      { label: '反対されるのがこわい', value: 27, color: '#0284C7' },
      { label: 'まとめ方がわからない', value: 21, color: '#0EA5E9' },
      { label: '時間が足りない', value: 12, color: '#38BDF8' },
      { label: 'その他', value: 7, color: '#94A3B8' },
    ],
    caption:
      '話し合いで困ること（33＋27＋21＋12＋7＝100％）。上位2つで60％を占める。この資料を引用したうえで、「いつ・何があった・どう変わった」の3点で体験を50〜70字にまとめると、180字の作文に収まる',
  },

  // s401：賛否の資料（合算して多数派を判断する）
  lf_kokokokugoext11_401: {
    kind: 'barChart',
    xLabel: 'スマートフォンの持ちこみへの賛否（単一回答）',
    yLabel: '割合（％）',
    yMax: 40,
    bars: [
      { label: '賛成', value: 24, color: '#0369A1' },
      { label: 'どちらかといえば賛成', value: 29, color: '#0284C7' },
      { label: 'どちらかといえば反対', value: 30, color: '#F59E0B' },
      { label: '反対', value: 17, color: '#DC2626' },
    ],
    caption:
      '中学校へのスマートフォン持ちこみへの賛否（24＋29＋30＋17＝100％）。単独最多は「どちらかといえば反対」30％だが、合算すると賛成側53％・反対側47％で賛成側がわずかに多い。必ず2つずつ足してから判断する',
  },

  // s402：実戦（中止をはさんだ回復のグラフ）
  lf_kokokokugoext11_402: {
    kind: 'barChart',
    xLabel: '年',
    yLabel: '祭りの参加者数（人）',
    yMax: 1400,
    bars: [
      { label: '2019年', value: 1200, color: '#0369A1' },
      { label: '2020年', value: 0, color: '#94A3B8' },
      { label: '2021年', value: 0, color: '#94A3B8' },
      { label: '2022年', value: 640, color: '#38BDF8' },
      { label: '2023年', value: 880, color: '#0EA5E9' },
      { label: '2024年', value: 1050, color: '#0284C7' },
    ],
    caption:
      'ある地区の祭りの参加者数。2020年と2021年は中止で0人。2022年以降は640→880→1050人と回復し、2024年は1050÷1200＝0.875で中止前の8割以上にあたる。最初と最後だけを比べて「減少」と書かないこと',
  },
};
