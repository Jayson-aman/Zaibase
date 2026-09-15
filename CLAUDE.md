# Zaibase Group — 開発ガイド

## ⏰ リマインダー（要対応）

| 期限 | 内容 | 担当 |
|---|---|---|
| **2026年7月21日ごろ** | **弁護士確認完了後 → 全国マッチング手数料機能を実装する**（業務委託・請負専門、成約時数%）。確認先は川原総合法律事務所。確認事項は `docs/legal/lawyer-checklist.md` の①有料職業紹介。実装準備は完了済み（`jobMatchingEnabled: false` を `true` に変更するだけで開放可能）。 | Claude Code |
| **ahiru収益化＋弁護士確認後** | **弁護士法72条確認完了後 → 以下3機能を開放する。** Firestoreの `platformConfig/features` に `legalFeaturesEnabled: true` を設定するだけで有効化可能。①`⚖️ 許認可・法令チェック`（kyoninkaScreen・AI法的判断）②`🛡️ 信頼スコア`（complianceGateScreen・弁護士確認前β）③`Zaibase法律相談バナー`（弁護士紹介に該当する可能性・弁護士法72条⑤グループ割引）。確認事項は `docs/legal/lawyer-checklist.md` の③④⑤。財源はahiru（受験アプリ）の収益で賄う予定。 | Claude Code |
| **Stripe審査通過後** | **建設の課金を再開する。** Firestoreの `platformConfig/features` に `billingEnabled: true` を設定するだけで有料プラン申込・Stripe決済が開放される。現在は料金プランページ・Stripe画面への導線・`doStripeCheckout()` をすべて停止中。 | Claude Code |
| **弁護士確認後（経営支援ツール）** | **資金繰りシミュレーター・価格転嫁交渉サポートを開放する。** ①Firestoreの `platformConfig/features` に `cashFlowEnabled: true` / `priceNegotiationEnabled: true` を設定。②`priceNegotiationEnabled` は Claude API（`generateNegotiationLetter` Cloud Function）を使用するため、事前に `firebase functions:secrets:set ANTHROPIC_API_KEY` でシークレットを設定してからデプロイする。実装: `kensetsu/frontend/Zaibase.html`・`kensetsu/functions/management_tools.js`。 | Claude Code |
| **ahiru Web版の会員登録・課金に実際の需要が出てから（2026/9/8時点で保留）** | **ahiru Web版（exam.zaibase.group）で、公式集（¥50）・単元解放（¥100）の買い切りを開放する。** 現状RevenueCatのWeb Billingは消費型（買い切り）商品に対応していないため、`services/subscription.ts` の `fetchFormulaUnlockProduct`/`fetchUnitUnlockProduct` はWeb版では常に`null`を返し、ボタンは「準備中」表示のまま（iOS/Androidアプリ版は対応済み・問題なし）。開放するにはRevenueCatを介さず、Stripeへの直接ワンタイム決済（Checkout Session作成用Cloud Function＋決済完了Webhook）を新規実装する必要がある（体感数時間規模）。Web版のPro/Max月額課金自体もまだRevenueCat側のWeb Billing設定（Stripe連携＋`pro_monthly`/`max_monthly`パッケージ作成）が未完了で「準備中」のままなので、まずそちらを先に有効化すること。 | Claude Code |
| **ahiru：App Store Connect/RevenueCat側の導入オファー設定待ち（2026/9/11時点）** | **Pro・Max両方に「¥500・7日間・Pay Up Front」の導入オファーを追加する。** コード側（`components/Paywall.tsx`）は対応済み：RevenueCatが `product.introPrice` を返せば「まず¥500で7日間」を自動表示する作りにしてあるので、追加のコード変更は不要。残っているのは①App Store Connectで両サブスク商品に導入オファー（Pay Up Front・¥500・7日間）を作成、②RevenueCatのOffering設定に反映、の2つの管理画面操作のみ。無料トライアルではなく先払い¥500方式にしたのは、転換率に関係なく1人あたり確実に黒字（Max: 手数料引き後¥425−AI原価最悪値¥54=¥371、Pro: AI機能なしのため¥425まるごと）にするため。トライアル終了前日のプッシュ通知リマインドは「見送り」判断（`expo-notifications`未導入のため新規機能扱いになる）。 | Claude Code |
| **ahiru：全教科・全単元の公式集を少しずつ拡充する（進行中の継続タスク、2026/9/12時点）** | **今日と同じペース・同じ形式で、公式集（¥50買い切り）を科目・単元ごとに少しずつ広げていく。** 1回で全部やろうとせず、毎回1〜2分野ずつ進める運用方針で合意済み。<br>**完了済み**：①数学（koushiki系、`data/lessons-koushiki-k3souji/k4en1/k5en2/k6sanpei.ts`等）に相似・円・三平方の9項目（チェバ・メネラウス・外心内心垂心・二つの円・三平方と空間図形・面積比・体積比・影と砂時計・線分比と面積比）を追加、各項目は「解説＋動く図解＋マンガ解説（新規実装、`components/MangaDialogue.tsx`）＋証明形式の応用問題」の4点セット。②`app/(tabs)/formulas.tsx`（理科・算数・社会の無料公式集、既存62〜75項目）に新機能`FormulaItem.locked`（¥50買い切りロック、既存項目は無料のまま）を実装し、理科に生物7項目・地学7項目を追加。③図形に部分三角形を色分けする`PolyFigure.regions`をFigureViewに新規実装。<br>④理科の物理・化学の追加（2026/9/12）：`data/formulas-rika-butsuri-kagaku.ts`を新規作成し、熱の伝わり方・熱量計算・電熱線の発熱・豆電球の明るさ・組み合わせ滑車・ばねの直列並列・鏡の像・凸レンズの虚像（物理8）、水の三態・再結晶の計算・金属と水溶液・燃焼と重さ・気体の見分け方・中和の計算（化学6）の計14項目を追加。既存の無料項目と混ざらないよう別ファイルにし、`data/formulas.ts`で`理科: [...rikaFormulas, ...rikaButsuriKagakuFormulas]`と連結している（この方式なら既存ファイルを触らずに追加できるので、今後の追加も同じやり方でよい）。<br>⑤「その場で解ける一問一答」機能（2026/9/12完了）：`components/InlineQuiz.tsx`を新規実装。公式集（koushiki）側は`data/koushiki-questions.ts`でfigureId→問題の逆引きを作り、解説・図解・マンガの下に自動で表示（45公式・88問が全て紐づき済み）。ロック中の公式はLessonRendererの早期returnで止まるため問題は漏れない。`formulas.tsx`側は`FormulaItem.quiz`にその項目専用の問題を直接書く方式にし、算数62・理科73・社会81の全216項目に3問ずつ（計642問）追加済み。<br>⑥社会の追加・国語・英語の新規構築（2026/9/12完了）：公式・まとめを5教科に拡張した。社会は`data/formulas-shakai-tsuika.ts`に14項目（地形図・縮尺計算・地図記号・雨温図・輸送、文化史、土地制度、江戸の交通、選挙制度、民事刑事、裁判員制度、円高円安）。国語は`data/formulas-kokugo.ts`に25項目、英語は`data/formulas-eigo.ts`に23項目（中3範囲まで。仮定法・関係副詞・分詞構文は範囲外として除外）。新規教科の国語・英語は先頭3項目だけ無料、残りは`locked: true`。`data/formulas.ts`で`Subject`を5教科に拡張し、`app/(tabs)/formulas.tsx`の`SUBJ_ICON`とタブ余白（5教科でも狭い端末に収まるようアイコン16px・gap詰め）も対応済み。⚠️買い切りの識別キーは`item.label`なので、新規項目を足すときは全7ファイルを通して項目名が重複しないこと（確認コマンド：`grep -h "^        label: '" data/formulas-*.ts | sed "s/.*label: '//;s/',$//" | sort | uniq -d`）。<br>⑦通常の教科書単元への「関係する一問一答」（2026/9/13完了）：`data/lesson-questions.ts`を新規実装し、単元ページ（`app/lesson/[id].tsx`）に表示。単元は5,340あり問題側に単元タグが無い（15,000問の再タグ付けは非現実的）ため、単元タイトルから特徴語を取り出して問題文に含まれるかで拾う近似方式。要点は「話題を表さない語を落とす」ことで、①その教科の問題全体での出現数がしきい値（1.5%または12件）を超える語は不採用、②2文字の語は専門語（枕詞・約数）と一般語（太陽・秋田）が混ざるので5件以下のときだけ採用、③構造語（求め方・読み取り・しくみ等のリスト）・指示語始まり・英単語のみの語は不採用、④長文問題・200字超の問題は除外。全単元で測定してカバー率56%、抽出結果を目視で確認済み。見出しは「この単元に関係する一問一答」と、正確な紐づけではないことを断って表示している。公式集の単元はスキップ（そちらは正確な専用問題を出しているため）。しきい値を触るときは必ず再測定すること（緩めると無関係な問題が混ざる）。 | Claude Code |

> このリマインダーは完了したら削除する。

## ahiru：コミット前の総点検（2026/9/14 整備）

**教材データやタブ画面をさわったら、コミット前に必ず `cd ahiru && npm run audit` を通す。**
`scripts/audit.sh` が ①tsc ②データ監査（実行時）③コード監査（静的）④Webバンドル を順に実行する。
`✓` と `合計 0 件` かつ「すべて通過」で終われば良い。`ℹ`（要目視）は正当なものが混ざるので件数が増えたときだけ見る。

データ監査（`scripts/audit-data.ts`）は **esbuild で実際にデータ層を読みこんで** 検査する。
正規表現でソースを読むだけだと「ファイルは正しいのに index に結線されておらずアプリに出ていない」類の失敗を見逃すため、この方式は変えないこと。

### 過去に実際に起きた失敗と、その再発防止（監査が見る項目）

| 何が起きたか | 再発防止 |
|---|---|
| **既存単元と内容が重複した単元を16件書いた**（小4国語。「物語①場面の変わり目」が既存の「場面をとらえる」と同内容など） | **新しい単元を書く前に、必ずそのセル（受験種別×学年×教科）の既存単元一覧を出す。** 監査の「同一セル内のタイトル重複」が検出する。ただしタイトルが違えば通ってしまうので、事前の一覧確認が本体 |
| **書きかけの英単語が本文に残った**（`technique は使わない。ここでは`／`short く書きとめる`／`practice`／`女性を women` など。複数回発生） | 監査の「日本語の中に英単語が挟まっている」。図形の頂点（ABCD）・略語（PKO・GDP）・化学式（NaOH）・単位は除外済みなので、小文字の英単語が出たら本物 |
| **分数の `/` が罫線と判定され、算数66単元の計算式が等幅の箱に入っていた** | `LessonRenderer.isArtLine` に「等号と数字を含む行は計算式なので図あつかいしない」を追加済み。監査の「意図せず等幅の箱になる本文」 |
| **社会・理科だけ一覧が点滅していた**（`removeClippedSubviews` が画面外セルを切り離す／`FlatList` の data・renderItem が毎回別物） | 監査の「removeClippedSubviews を有効にしている」「FlatList を使う画面でメモ化が足りない」。`removeClippedSubviews` は使わない。data は `useMemo`、renderItem は `useCallback`、行は `React.memo` |
| **メモ化を足したとき、フックを早期returnより後ろに書いた**（tsc では検出できない） | 監査の「早期returnより後ろのフック」。フックはすべて早期returnより前にまとめる |
| **Web版（Mac）だけ、社会が点滅してスクロール位置が巻き戻った**。原因は2つ。①`imageSize = winWidth - 58` に上限が無く、Mac幅1440pxで640×640の画像を1382pxに引き伸ばしていた。さらに縦スクロールバーが出入りするだけで窓幅が十数px変わり、全行が別サイズで描き直されて高さが変わっていた。②Webでも仮想化していたため、セルが増えるたびに全体の高さが測り直され、ブラウザのスクロール位置が跳ねていた | ①窓幅からサイズを決めるときは `Math.min` で上限をつけ、`Math.round(x/32)*32` で丸める（監査の「useWindowDimensions を丸めずにサイズへ使用」）。②**Web版では仮想化しない**（`Platform.OS !== 'web' && …`）。ブラウザは画面外の要素を持っていても平気で、メモリが問題になるのはネイティブだけ |
| **「動く図解」が説明になっていなかった（全教科・全学年）**。`FigureView` のアニメーションは「SVGの部品を1.4秒かけて薄く重ねていく」だけで、動きも強調も式との対応もなく、図全体がぼんやり現れて終わっていた。しかも部品が何個あっても1.4秒固定だったため、部品の多い図では1個あたり0.1秒もなく、全部が同時に出たようにしか見えなかった。単元で使われる3,327図のうち2,617図（79%）が`steps`すら持たず、この無意味なフェードだけだった | `FigureView` を「1部品ずつ順に描き、描いたばかりの部品を強調色でひとまわり太くかさねる」方式に変更済み。描画時間も部品数に比例させる（1部品あたり約0.36秒、上限7秒）。イージングは外して等速にした（easeOutだと最初の数部品が一気に出る）。**図形データは1件も変えずに全図が改善する**作り。<br>**2026/9/15に続き**：問題集の図1,320枚のうち798枚（60%）は `steps` を持たず、線がすうっと現れて終わりで、何の図なのか・どの数がどこの長さなのかが文字では一切示されていなかった。`data/auto-steps.ts` を新設し、**図形データそのものから説明文を組み立てる**ようにして798枚すべてを埋めた（手書き522・自動798）。**手で書いた数値と図の数値が食いちがう事故が原理的に起きない**のが要点で、figure の中にある値しか読まない。`figure.steps` があれば必ずそちらが優先される。監査の「図解の説明／説明が出ない図」が0件を保つ |
| **公式・まとめタブの図解22件が、1件も `steps` を持っていなかった**（算数13・理科8・社会1）。単元ページ側の図解ばかり数えていて、**ユーザーが実際に毎日見ている公式・まとめ画面の図解を数えていなかった**。図解の網羅率を測るときは `lesson-figures` 側だけでなく、`FORMULAS` の各 `item.figure`（教科ファイルに直接書かれている）も必ず数えること | 2026/9/14に全22件へ7〜8段階の説明を追加済み。**網羅率の測定は esbuild でデータ層を読みこんで両方を走査する**（`FORMULAS` を回して `item.figure.steps` を見る）。ソースを grep するだけだと、書き方のちがう方をまるごと見落とす |
| **図解の説明に書く数値は、その図形データに入っている数値と必ず突き合わせる**。グラフ系（`lineChart`）は説明文だけ先に書くと図と食いちがう | ばね（10g→2cm）・溶解度（硝酸カリウム0℃13g・80℃169g、食塩35g→38g）のように、`points` の実データを読んでから文章の数値を決める |
| **一括置換の失敗で、別の文が文の途中にまるごと差しこまれて本文が壊れていた**（「二つの円の位置関係」④⑤。`④d= … r₁−r₂はr₁−r₂／<d<r₁+r₂のとき:2つの円は2点で交わる。…は(r₁≠r₂)のとき:` という読めない文になっていた）。**tsc も expo export も通るので、型検査では絶対に見つからない** | 監査の「同じ本文の中で40字以上がそっくり繰り返されている」。文単位で突き合わせる案は、差しこまれた側の前後がくっついて別の文になるため**実際には0件で効かなかった**。文の切れ目を無視して40字の窓でずらしながら比べること。正当な繰り返し（例文の再掲・国語の課題文の二度出し）が34件あるので ℹ 扱い、**件数が増えたときだけ中身を見る** |
| **一問一答の解説が、式をなぞるだけで「なぜそうなるか」を言っていない**（1,770問中1,221問＝69%）。「頂角40度の二等辺三角形の底角は」に「底角は2つとも等しいので (180−40)÷2＝70度」とだけ書いてあり、**なぜ底角が等しいのか**も、**140度が底角2つぶんの合計だ**という肝心なところも書いていなかった。ユーザーから「説明不足で、わからない人はわからない」と指摘された | **2026/9/15に全1,770問を書き終えて0件にし、監査を `info` から `check` に変えた。以後は1件でも出るとコミットが止まる。** 書くときの型：①公式が何を表しているか（面積なら「1cmの正方形が何個か」）②なぜその操作をするのか ③計算 ④よくあるまちがい。数だけ書いて終わりにしない。⚠️判定は検出語（なぜ・ので・ため…）によるので、理由が書けていても言い回しによっては拾われることがある。止まったら、まず本当に理由が書いてあるかを読んで確かめること。**検出語（`WHY_WORD`）を足して通すのは本末転倒なので、安易に広げない** |
| **一問一答に解説そのものが1文字も入っていない問題が165問あった**（社会・国語に集中）。答えだけが出て終わるので、まちがえた子は「なぜその答えなのか」を知る手がかりが画面のどこにも無かった。これは質の問題ではなく**欠けている**ので0にできる | **2026/9/15に0件にし、監査を `info`（残債）から `check` に変えた。以後は1件でも出るとコミットが止まる。** `quiz` に問題を足すときは `explanation` を必ず同時に書くこと。書き方は上の行と同じ型（①用語の意味 ②なぜそうなるか ③事実 ④まちがえやすい点）。**歴史・地理のように事実を述べる問題ほど理由が抜けやすい**ので、「なぜその年か」「なぜその土地か」を必ず一文入れる |
| **問題集の解説が、画面ではほとんど読めなかった**。解説は全15,199問すべてに入っていて中央値167字あるのに、無料ユーザーには `hint`（中央値34字）だけが**「📖 解説」という見出しで**表示されていた。ヒントの無い532問では `explanation.split('\n')[0]` を出していたため、1行目が「【解説】」という見出しの文字しか無い問題（50問）では画面に「【(1)の解説】」とだけ出て、裏の1,000字超の解説がまったく読めなかった。さらにアップグレード案内は `!question.hint` が条件だったため、ヒントのある14,667問では**くわしい解説が存在すること自体が知らされなかった**。ユーザーから「すべて解説がない。わかんないよーと言われないように」と指摘されて発覚 | **2026/9/14に方針変更：解説本文は無料で全文を出す。** Proが受け持つのは 図解つき・覚え方・ひっかけ注意・AI弱点コーチ・聞き流し。表示は `utils/explanation.ts` の `explanationText()` に一本化した（先頭の「【解説】」だけの行は見出しと二重になるので落とす）。監査の「問題集の解説が画面上で短すぎる（20字以下）」が、**画面に出る文そのもの**を同じ関数で測る。**データを見るだけでは絶対に気づけない種類の失敗なので、「データにあるか」ではなく「画面に出ているか」で測ること** |
| **小学生向けの問題に、中学以上でしか習わない内容が出ていた**。平方根（√）は中学3年で習い、中学受験の算数でも使わないのに、「1辺8cmの正方形の対角線は8√2cm」「正三角形の面積＝(√3/4)×一辺²」のような問題・解説が48問あった（算数42・理科6）。ユーザーから「小学生が平方根習いますか？」と聞かれて発覚 | 監査の「小学生向けの問題に平方根が出ている」。**問題文と答えだけ見ても取りこぼす**。解説・ヒント・覚え方（memoryTip）・ひっかけ注意（pitfall）まで全部の欄を見ること（実際、解説を直したあとに覚え方の欄へ「√の整理」が残っていた）。**書きかえの型**：正三角形・正六角形は高さや正三角形1個の面積を問題文で与える／対角線の長さは「面積」や「4等分した三角形」を問う形に変える／3:4:5・6:8:10・5:12:13 の整数比に当てはまるものはその比で読む／「2回かけて□になる数」という言い方にする。**小学生が解けない問題を出すのは困るが、コツの欄で「中学ではこう一発で解ける」と紹介するのは別で、こちらはむしろ良い** |
| **高校受験（中学生）向けの問題に、高校の内容が「入試に出る問題」として出ていた**（sin/cos/tan・微分積分・Σ・ベクトル・行列・log、計54問）。うち51問は `maxOnly`（Maxプラン限定）だったが、**`maxOnly` は課金の出し分けであって「先取り」という表示ではない**ので、生徒は入試範囲だと思ってしまう。`koko_max_sansu_35` の1次変換（行列）にいたっては、現在の高校課程にも無い | 監査の「中学生向けの問題に印なしで高校内容が出ている」。**全員に出るものは中学範囲に書き直す**（sin Aを問う代わりに面積や辺の比を問う）。**Maxプラン限定のものは消さず、問題文の先頭に【高校先取り】を付け、ひっかけ注意の欄に「高校入試には出ない／中学ではこう解く」と書く**。内容は価値があるので消さない。ただし「入試に出る」と誤解させないことが大事。**数え方の注意**：`sin`/`cos`/`log` は英単語（singing・cost・biology）に当たるので、教科をしぼり語の切れ目で判定しないと数字が数倍にふくらむ（最初の集計では79問・418問と出た） |
| **下書き段階で壊れた文字列・書きかけの英単語が混ざった**（ロシア語の単語が1件、`health を損なう` が1件、アポストロフィを避けようとして `Don not`／`my fathers father` という誤った英語が3件）。いずれも一括置換用のスクリプトを書いている途中で混入した | **スクリプトを走らせる前に、置きかえる文字列そのものを `grep` で点検する。** 日本語の解説に小文字の英単語が3文字以上続いていたら本物のミス（監査の「日本語の中に英単語が挟まっている」が拾う）。**TypeScript の文字列にアポストロフィが必要なときは、単引用符を避けるのではなく、二重引用符で囲んだファイル側に書く。** 英語をわざと崩して回避すると、英語の教材として誤りになる |
| **自動生成した説明が、図の使われ方とずれていた**。`coordinate`（座標平面）は理科でも「日食（地球・月・太陽）」「光の屈折」「太陽系の並び」のような**ただの模式図**として使われており、グラフとして説明すると「横がx軸」「直角三角形をつくる」というまったく的外れな文が出た。同様に、まるい池を表しただけの `circle`（植木算）に「二等辺三角形ができる」と助言していた | **図の `kind` は、その図が何を表しているかを保証しない。** 自動で文をつけるときは、中身を見て用途を判定してから書き分ける（`data/auto-steps.ts` の `isSchematic`：式のグラフも多角形も無く、点の名前が日本語なら模式図）。**生成した文は必ず教科ごとに実物を数件読む。** 件数が合っていることと、中身が正しいことは別 |
| **自動生成の文に `**強調**` を書いた**。`FigureView` はマークダウンを解釈しないので、画面に `**ならび順**` とアスタリスクがそのまま出る | 図解の `steps`・`caption` にマークダウン記法は使わない。`auto-steps.ts` の `keep()` が `**` を落とすようにしてある |
| **検出語による検査が、名詞に当たって素通りしていた**。「一問一答の解説が理由まで書けていない」の検出語に `くらべ|比べ` を入れていたため、割合の「**くらべる量** ＝ もとにする量 × 割合」や「柱状図を**比べる**」のように、**ふつうの名詞・動詞**として出てくる解説が「理由あり」と誤判定され、式だけの解説が9件通っていた | **検出語は「理由を述べる言い回し」だけに限る。** 内容語（比べる・考える・求める…）を入れると、その語を使う単元まるごとが素通りする。`くらべ|比べ` は2026/9/15に外し、9件すべてに理由を書き足した。**0件になった検査は、通っていること自体を疑って一度中身を読む。** 通し方が甘いだけかもしれない |
| **区別すべき2語を、同じ言葉づかいでまとめていた**。「氷がとける（融解）」と「食塩がとける（溶解）」が区別されず、公式集に「融解」が1件も無かった。ほかにも 蒸発／沸騰、領海／排他的経済水域、体積／容積、合同／相似 が、問題集には出ているのに公式集で並べて説明されていなかった | 監査の「区別すべき2語を、公式集で並べて説明していない（要目視）」。**問題集に出ているのに公式集で対にして説明していない語の組**を拾う。対の一覧（`CONFUSABLE`）に足していけば、同じ種類の見落としを機械的に見つけられる。**2026/9/15に対を31→177組に増やして再点検し、14件を追記して0件にした**（凝結／凝固、風化／しん食、弾劾裁判／国民審査、御成敗式目／武家諸法度、季節風／偏西風、一次関数／比例、有理数／無理数、可算／不可算 ほか）。⚠️**対の一覧には、受験範囲外の語や、対比の関係にない語を入れないこと。**毎回 ℹ に出続けて本当の見落としが埋もれる（加速度・定義域/値域・独立/排反は高校範囲、関係副詞は中3の範囲外で公式集から意図的に除いてあるため、11組を外した）。⚠️**公式集側の表記ゆれで誤検出する。**「侵食」は公式集では「しん食」と書かれていたため、検査側を実態に合わせた。**新しい検査を入れて0件になったら、わざと未対応の対を1つ加えて本当に検出されるか確かめてから信用する**（実際、`SUBJECTS` を添字に使う書きまちがいで全件素通り→全件検出という誤動作をしていた） |
| 同名の単元が同じ学年に2件（社会「日本国憲法の三大原則」） | 監査の「同一セル内のタイトル重複」。タイトルを内容に合わせて差別化して解消済み |
| 公式集の `label` は¥50買い切りの識別キーなので全教科で一意でなければならない | 監査の「公式集label重複」 |
| 新しい単元ファイルを作ったが index に `import`／`...spread` し忘れ | 監査の「単元ファイルの結線漏れ」 |

### 誤検出だったので、次は騒がない

- **「教科内のorder重複」は問題ではない。** 画面は 教科でfilter → orderでsort → 受験種別でfilter の順に処理するので、中学受験と高校受験が同じorder番号でも表示順は乱れない（実際に2,328件ある）。**同一受験種別の中で**重複していなければよい。
- **数値の食いちがい検査は誤検出が多い。** 間ノ岳3,190m を富士山の高さ、水中の音速1500m を空気中の340m、エタノールの沸点78℃ を水の沸点、参議院の「任期6年」を衆議院の任期、と誤って拾った。文脈を見ずに数値だけを比べないこと。
- 中学受験と高校受験で同名の単元があるのは正当（同じ話題を深さを変えて扱う）。同じ一覧に並ばない。

## Zaibase Group 全プロダクト一覧

| プロダクト | リポジトリ | URL | 担当ツール |
|---|---|---|---|
| Zaibase建設 | jayson-aman/zaibase (kensetsu/) | https://zaisai-share.web.app/app | Claude Code |
| Zaibase法律相談（Firebase版） | jayson-aman/zaibase (horitsu/) | https://zaibase-horitsu.web.app | Claude Code |
| Zaibase法律相談（Cloud Run版・本番） | 別リポジトリ（~/Documents/GitHub/Zaibase法律相談） | https://zaibase-legal-k56gkm3vfa-an.a.run.app | Cursor |
| 中学受験対策 ahiru | jayson-aman/zaibase (ahiru/)（旧 jayson-aman/ahiru は統合元として残存） | https://exam.zaibase.group | Claude Code |
| 宅建士対策 | jayson-aman/zaibase (takken/) | Vercel デプロイ予定（URL未定） | Claude Code |
| 高校受験 英単語・英熟語 EWP.Zaibase | ローカル・Git未管理（このリポジトリ未統合。Cursorで作成、RevenueCat課金は実機テスト済みで稼働中。英単語2,300語・英熟語2,200語、文法ワークブック全25章、ジョーク読解クイズ収録） | 未定 | Cursor |
| Zaibase Group 会社サイト | jayson-aman/zaibase.group | https://www.zaibase.group | Cursor |
| Zaibase証券（仮） | jayson-aman/miyabi-securities-app（公開・このリポジトリ未統合。旧 miyabi-securities はアーカイブ済み。Streamlit製AI金融分析ダッシュボード：ニュース・要人発言・軍事動向のAI分析でFX・先物・株式・暗号資産・新興テーマ株の値動きを予測。Python100%、Yahoo Finance/Google Newsがデータ元、教育目的・投資助言ではないと明記） | 未定 | Cursor |
| Zaibase物販（仮） | jayson-aman/eBay-export-profit-dashboard（公開・このリポジトリ未統合） | 未定（Streamlit Community Cloudでデプロイ） | Cursor |

## プロジェクト構成（このリポジトリ）

```
Zaibase/
├── kensetsu/          # Zaibase建設（Firebase: zaisai-share）
│   ├── frontend/Zaibase.html   # メインSPA（2万行超・単一ファイル）
│   ├── functions/              # Cloud Functions v2（27ファイル）
│   ├── firestore.rules
│   └── firebase.json
├── horitsu/           # Zaibase法律相談（Firebase: zaibase-horitsu）
│   ├── frontend/index.html     # 法律相談SPA
│   ├── functions/              # subscription.js / consult.js / revenue.js / invite.js
│   ├── firestore.rules
│   └── firebase.json
├── ahiru/             # 中学受験対策 ahiru（Expo/React Native、iOS・Android・Web）
│   ├── app/                     # expo-router 画面（タブ・クイズ等）
│   ├── components/ services/ hooks/ store/ data/
│   ├── services/subscription.ts # RevenueCat連携（Stripeではない）
│   └── vercel.json              # Web版デプロイ設定（Root Directory要設定）
├── takken/            # 宅建士対策（Expo/React Native、iOS・Android・Web）
│   ├── app/                     # expo-router 画面（ホーム・テキスト・問題集・マイページ）
│   ├── data/                    # 約1,400問＋全34章テキスト・図解（宅建業法・権利関係・法令制限・税その他）。令和7・8年本試験模擬50問×2含む
│   ├── services/subscription.ts # RevenueCat連携（プレースホルダー）
│   └── vercel.json              # Web版デプロイ設定（Root Directory: takken）
└── docs/
    ├── group/         # Zaibase Group 戦略・収益予測
    ├── kensetsu/      # 建設仕様書・設計画面
    └── horitsu/       # 法律相談仕様書
```

## 絶対に混ぜない

- **kensetsu（建設）** と **horitsu（法律相談）** は別プロダクト・別Firebase
- 法律関連コンテンツ → kensetsu に入れる（法律相談SPAではない）
- 決済・Auth・Firestore は各プロジェクト独立
- horitsu の `applyGroupDiscount`（建設プロプラン会員→法律相談¥1,000引き、`horitsu/functions/subscription.js`）は、弁護士法72条（周旋・紹介規制）の確認が取れるまで管理者承認（`groupDiscountGranted`）しない
- zaibase.group・法律相談（Cloud Run版）に「建設のトラブルはそのまま法律相談へ」等、建設と法律相談を商業的に誘導する文言を入れない
- 詳細は `docs/group/legal-compliance-addendum.md` 参照

## 法改正・税制改正の更新方針（宅建・法律相談・建設）

**方針：法改正・税制改正があった都度、該当コンテンツ（問題・解説・図解・テキスト）を最新の現行法に更新する。** 特に宅建（takken）は毎年10月の本試験が「その年の4月1日時点で施行されている法令」に基づくため、年度の法改正は必ず反映する。

- **更新対象**：takken の問題（`data/questions_*.ts`）・解説・章テキストと図解（`data/chapters.ts`）、horitsu/kensetsu の法律コンテンツ。
- **現在反映済みのベースライン（2026年時点）**：盛土規制法（宅地造成及び特定盛土等規制法・令和5年施行）、相続登記の申請義務化（令和6年4月）、成年年齢18歳（令和4年）、譲渡所得の長期20.315%／短期39.63%、不動産取得税 土地・住宅3%、固定資産税 小規模住宅用地1/6 等。
- **毎年チェックすべき典型項目**：税率・軽減措置の期限延長／改正（不動産取得税・固定資産税・登録免許税・印紙税の特例）、住宅ローン控除、各種特別控除の要件、都市計画法・建築基準法・宅建業法の改正、統計問題の最新データ。
- **作業手順**：法改正を反映する際は、①該当する問題・解説・図解を検索して更新、②`correctExplanation` と `choiceExplanations`・図解の数値を現行法に合わせる、③`recentChange` フィールドや `isRecentChange` があれば付与、④TypeScript型チェック後にコミット。

## ツール別担当まとめ

| 作業内容 | 使うツール |
|---|---|
| Zaibase建設・法律相談（Firebase）の機能追加 | **Claude Code（ここ）** |
| ahiru（受験）の機能追加 | **Claude Code（ここ）** |
| Cloud Run版法律相談の機能追加 | **Cursor** |
| 会社サイト（zaibase.group）の更新 | **Cursor** |
| 証券・物販（構築中）の機能追加 | **Cursor**（リポジトリ確定後にここへ追記） |
| デプロイ・GitHub管理 | **Claude Code（ここ）** |

## ahiru統合（2026/6/16 完了）

- jayson-aman/ahiru（公開リポジトリ）から `git clone` でコード取得 → `ahiru/` 配下にGit履歴なしで統合済み。秘密情報（`.env`等）は元リポジトリに含まれておらず、持ち込みなし。
- 旧 jayson-aman/ahiru リポジトリはこのまま残存（履歴保持用）。今後の開発はこのリポジトリの `ahiru/` でのみ行う。
- **課金はStripeではなくRevenueCat**（`ahiru/services/subscription.ts`）：iOS/Androidのネイティブアプリ内課金（App Store/Google Play IAP）をRevenueCat経由で利用する構成。`.env.example` のRevenueCatキーはまだプレースホルダーのため、本番キー（`EXPO_PUBLIC_RC_API_KEY_IOS` / `_ANDROID`）とApp Store Connect/Google Play Console側の商品設定が未着手。
- **Vercel連携：完了（2026/6/16）**：VercelプロジェクトのGitHub App権限を許可 → Connected Git Repositoryをこのリポジトリ（Jayson-aman/Zaibase）に変更 → Root Directoryを `ahiru` に設定 → `main` への統合コミット反映後、Production環境へのデプロイ成功を確認済み。
- **要確認**：Claude Code on the web に jayson-aman/ahiru 単体の別セッション（「受験」、Vercelデプロイ待ち状態）が残っている場合、この統合後は重複作業になるため終了・整理する。
- **現在の最優先タスク（2026/6/16時点・収益化優先）**：受験アプリのRevenueCat課金を有効化する。必要な3つのアカウント（RevenueCat／Apple Developer Program／Google Play Console）はいずれも未作成のため、Claude Codeがステップバイステップで作成・設定を案内中。コードは`services/subscription.ts`・`constants/proAccess.ts`に実装済みでプレースホルダーキーの差し替えのみで動く想定。
- 残タスク：ログイン方式の検討、既存の建設・法律相談と同様の監視・自動化フローへの組み込み。

### ⚠️ ローカルクローンの罠：`~/ahiru` は別プロジェクト（QualiZ）（2026/8/23判明）

ユーザーのMacのホーム直下 `~/ahiru` は、このリポジトリではなく**無関係の別アプリ「QualiZ」**（Bundle ID `com.jaysonaman.qualiz`、Expoプロジェクト `@masaya.nanjo/qualiz`）のローカルクローン。`cd ahiru` だけで移動すると誤ってQualiZ側でビルド・提出してしまう事故が実際に発生した（2026/8/23、EAS submitがQualiZ宛に実行され失敗して発覚）。

- **正しいクローン**（すべて `jayson-aman/zaibase` を指す、`ahiru/app.json` の `bundleIdentifier` が `com.zaibase.exam`）：
  - `~/zaibase-repo`（作業に使っているメイン）
  - `~/Documents/GitHub/Zaibase`
  - `~/Zaibase`（同名の入れ子 `~/Zaibase/Zaibase` も存在するが古い重複クローンの可能性、混同注意）
- iOS ビルド・提出コマンドを案内する際は、必ず `cd ~/zaibase-repo/ahiru` のように絶対パスを明示すること。「`cd ahiru`」のような相対パスだけの指示は誤爆の原因になる。
- ビルド前に `grep bundleIdentifier ahiru/app.json` で `com.zaibase.exam` になっていることを確認する運用を徹底する。

### iOSビルド時の既知の落とし穴（2026/8/23、解決済み）

2026/8/23、iOSビルド・提出が3つの原因で何度も失敗し、同じやり取りを繰り返した。**`eas build --platform ios` が成功しビルド番号3で `.ipa` が生成されたことを確認済み**（buildNumber 1→2→3、最終的に成功）。次回同様の作業をするときは、まず以下を順にチェックすれば同じ堂々巡りは避けられるはず。

1. **正しいディレクトリか確認する**：`~/ahiru` は無関係の別アプリ「QualiZ」（`com.jaysonaman.qualiz`）のクローンなので絶対に使わない。必ず `cd ~/zaibase-repo/ahiru` のように絶対パスで指定し、ビルド開始直後の表示で `Bundle Identifier: com.zaibase.exam` / `Project: @masaya.nanjo/entrance-exam` になっているか確認してから進める。
2. **ビルド番号はEAS側で管理している（2026/9/13変更）**：`eas.json` を `appVersionSource: "remote"` にしたため、EASはもう `app.json` の `ios.buildNumber` を書き換えない。したがってビルド前の `git checkout -- ahiru/app.json` は不要になった。<br>それまでは `local` だったため、EASが書いたビルド番号を毎回 `git checkout` で捨てる運用になっており、次のビルドでも必ず1→2と採番されて**同じ番号で二度提出しようとして失敗する**事故が実際に起きた（1.2.9(2)で発生）。`remote` ではEASが採番を覚えているので、この衝突は起きない。バージョン（1.2.10など）を上げるときだけ `app.json` を編集する。
3. **reanimated / worklets のバージョンが固定されているか確認する**：`ahiru/package.json` はこの2つを範囲指定なしの完全固定にしてある（`react-native-reanimated: 4.5.3` / `react-native-worklets: 0.11.1`、検証済みの組み合わせ）。`package-lock.json` はこのリポジトリ全体の方針でコミットしていないため、どちらかを `^4.4.1` のようなレンジ指定に戻すと、EASビルドのたびに最新版へ自動で引き上がり、組み合わせがずれて `pod install` やXcodeビルドが失敗する（実際に発生：worklets 0.12.x で `executeSync` が `runSync` 系にリネームされて削除されており、reanimated 4.6.0がそれを呼び出そうとして `no member named 'executeSync' in 'worklets::WorkletRuntime'` で失敗した）。**この2つの依存関係は今後もレンジ指定に戻さないこと。** バージョンを上げる必要が出た場合は、`npm view react-native-reanimated@<version> peerDependencies` で要求される worklets バージョンを確認し、両方を新しい組み合わせに完全固定してから実機でビルド確認する。

## 司令塔AI（複数プロダクト横断監督）— 保留中

- 構想：建設・法律相談・受験（・将来の証券・物販）を横断的にチェックするAI（Claude Agent SDK / Managed Agentsの`multiagent`構成を想定）。
- コスト：固定費ではなくAnthropic APIの従量課金。1日1回程度の軽いチェックなら月数千円規模、頻度や読ませる情報量が増えると数万円規模になり得る。
- **2026/6/16判断**：収益化（受験アプリのRevenueCat課金）が先に必要なため、司令塔AIの構築は保留。受験アプリの課金が稼働してから着手する。

## 収益化アイデア（バックログ・未着手）

ahiruのRevenueCat課金が最優先のため、以下は着手前のアイデア段階。優先順位は決めていない。

- FX口座開設アフィリエイト：ASP（A8.net／afb／バリューコマース／アクセストレード）経由でGMOクリック証券等と提携。成果報酬は口座開設1件あたり1万円程度（クリック課金ではなく成果報酬型）。金融商品取引法上、利益を保証する表現は不可。
  - **`miyabi-securities-app`（Zaibase証券・AI金融分析ダッシュボード）との組み合わせが本命**：AI予測を見たユーザーがそのままFX口座開設に流れる導線を作れる。ただし「このAIが勝つと言っている／だから今すぐ口座開設」のような誘導は、教育目的の免責と矛盾し、投資助言業の規制（金融商品取引法）に抵触するリスクがあるため、予測コンテンツとアフィリエイト導線は明確に分離して表現する必要がある。
- `miyabi-securities-app`の「新興テーマ株スキャナー」の既存「AI」テーマに、AI開発の地政学・輸出規制リスク（例：2026/6、米政府がClaude Mythos 5/Fable 5を輸出管理対象に指定し外国籍ユーザーのアクセス停止を命令、Anthropicが国籍を実時間で区別できず全世界向けに両モデル提供を一時停止。日経報道）をニュースセンチメント要因として追加する案。これは別リポジトリ（Cursor担当）側の機能追加であり、ここでは実装しない。下流の経済・市場への影響（日本経済への影響、中国AIの台頭など）は未確定の推測であり、確定事実として予測ロジックの前提にしないこと。
- ahiru：参考書・問題集のAmazonアソシエイトリンク設置
- kensetsu：保険・リフォーム業者の紹介料
- horitsu：弁護士紹介料（既存ルールの通り、弁護士法72条の確認が取れるまで保留）

## メール・クレーム対応

- `info@zaibase.group` → Cloudflare Email Routing経由の転送設定は**実際には無効（2026/6/16確認：Status Disabled、DNS records Not configured）**。前回記載の「2026/6/15設定・完了」は誤り。`info@zaibase.group` は転送ではなく独立したGoogleアカウント（自分自身の受信トレイ）として運用されている。
- Claude APIを使った自動返信：`info@zaibase.group` 宛の受信メール全てに「内容を確認のうえ3営業日以内に返信」とAI自動返信する仕組みが存在（場所はこのリポジトリ内ではなく外部・場所不明。クレーム/問い合わせ対応のため意図的に設置されたもので、停止しない）。2026/6/16、この自動返信がRevenueCatのチケットシステムと反応し合い、Ticket #79123〜#79133まで増殖するメールループが発生（実害なし、自然に停止）。**既知の課題**：no-reply/サポートチケット系の自動送信メール（RevenueCat等）にも無差別に自動返信してしまう。再発防止のため、`info@zaibase.group`のGmailフィルタで自動送信元（revenuecat.com等）を受信トレイスキップにする対策が未着手。
- クレーム対応は現在1人運営のため、コンテンツモデレーションを自動化済み

## 法律相談 招待・アクセスコード

### Firebase版 管理者パネル（弁護士向け）
- コード：`ZB-LEGAL-BF97-0773-FFB1`
- 用途：法律相談（Firebase版 https://zaibase-horitsu.web.app）の管理者パネルへのアクセス
- 共有方法：`info@zaibase.group` から弁護士へメール送付

### Cloud Run版 クローズドβ入場コード
- コード：`miyabi-beta-2026`
- 用途：本番URL（https://zaibase-legal-k56gkm3vfa-an.a.run.app）のβゲート突破。`BETA_MODE=1` 時に有効。`/beta.html` でコード入力→Cookie保存で以降はスキップ
- 変更方法：Cloud Run版リポジトリの `.env` / `deploy/.env.cloudrun.yaml` の `BETA_ACCESS_CODE` を書き換えて再デプロイ（Cursor担当）。`BETA_MODE=0` にすると一般公開（コード不要）

## デザイン（青空色パレット）

```
Primary:  #0EA5E9
Dark:     #0369A1
Mid:      #0284C7
Light:    #E0F2FE
Pale:     #F0F9FF
Muted:    #64748B
```

- PC背景：東京スカイラインSVG（base64埋め込み）
- モバイル最大幅：480px、border-radius: 14px
- フォント：-apple-system, BlinkMacSystemFont, 'Hiragino Sans'

## Cloud Functions ルール

- すべて v2（`firebase-functions/v2/https`）
- すべての onCall に `enforceAppCheck: true`（**ahiru は例外**：クライアントの App Check が Web のみ実装でネイティブ未対応のため、iOS で全 AI 機能が弾かれる。ahiru/functions は `enforceAppCheck` を外し、Firebase Auth 必須＋Firestore の利用回数制限で担保している。ネイティブ App Check を実装したら戻すこと）
- region: `"asia-northeast1"`
- Secrets は `defineSecret()` で定義

## 事業者情報

- 運営：南條 雅哉 / Zaibase Group
- 住所：〒543-0071 大阪府大阪市天王寺区筆ヶ崎町6-12-1701
- メール：info@zaibase.group（`zaibase.jp` は未取得のため使用不可）
- 電話：請求があった場合に遅滞なく開示（特定商取引法対応）

## Firebase プロジェクト

| プロダクト | Firebase プロジェクト | URL |
|---|---|---|
| Zaibase建設 | zaisai-share | https://zaisai-share.web.app/app |
| Zaibase法律相談 | zaibase-horitsu | https://zaibase-horitsu.web.app |
| 中学受験対策 ahiru | zaibase-exam | https://exam.zaibase.group |

## Stripe

- アカウント名：Zaibase Group（MIYABI WOR / acct_1TEhbMJtbSkZ2zlG）
- 建設プラン：starter ¥1,980 / pro ¥5,480 / team ¥14,800（月額）
- 法律相談：standard ¥2,980 / pro ¥7,800（月額）
- Zaibase建設プロプラン会員割引：法律相談が¥1,000引き

## 現在の開発ブランチ

`claude/water-soil-pollution-compliance-bekue1`

## よく使うコマンド

```bash
# 建設デプロイ
cd kensetsu && firebase deploy --only hosting

# 法律相談デプロイ
cd horitsu && firebase deploy

# Stripe Secret設定
firebase functions:secrets:set STRIPE_SECRET_KEY
firebase functions:secrets:set HORITSU_STRIPE_SECRET_KEY

# 受験(ahiru) ローカル起動・Web版ビルド
cd ahiru && npm install && npm run web
cd ahiru && npx expo export --platform web
```

## SEO・Search Console 状況（2026/6/21時点）

| サイト | プロパティ種別 | サイトマップ | 状態 |
|---|---|---|---|
| `zaibase.group` | ドメインプロパティ | `https://www.zaibase.group/sitemap.xml` | 成功・8ページ検出済み |
| `zaisai-share.web.app` | URLプレフィックス | `sitemap.xml` | 送信済み・数時間〜1日で「成功」に変わる見込み |

- Cloudflare TXT レコードは所有権維持のため削除しない
- `/undefinedsitemap.xmlsitemap.xml`（誤送信）は放置でOK（無害）
- **次のTODO**：Bing Webmaster Tools への登録（`zaibase.group` と `zaisai-share.web.app` の両方）。Google Search Console と同期する方法で所有権確認を自動完了できる。Yahoo 検索は Bing データを使うため、Bing 登録で Yahoo にも反映される。Cursor が対応中。

## 公開範囲（2026/6/21時点）

| プロダクト | 公開状態 | 備考 |
|---|---|---|
| Zaibase建設 `zaisai-share.web.app` | **公開中** | メインプロダクト |
| 会社サイト `zaibase.group` | **公開中（建設のみ案内）** | 法律・証券は「準備中」カード表示・リンクなし |
| Zaibase法律相談 | 非公開（アクセスコード制） | `/law` は直接URLのみアクセス可 |
| ahiru 受験 `exam.zaibase.group` | **公開中** | RevenueCat課金は未設定（プレースホルダー） |
| Zaibase証券 | 未公開 | 別リポジトリ・準備中 |
