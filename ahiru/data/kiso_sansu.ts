import type { Question } from './questions';

export const kisoSansu: Question[] = [
  // ============================================================
  // 整数の計算（四則混合）: 10問 (001–010)
  // ============================================================
  {
    id: 'kiso_sansu_001',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '次の計算をしなさい。\n24 ÷ 6 × 3 − 5 + 8',
    answer: '15',
    hint: '掛け算・割り算を先に計算し、次に足し算・引き算を左から行う。',
    explanation:
      '【解説】\n①まず掛け算・割り算を左から計算する。\n　24 ÷ 6 ＝ 4\n　4 × 3 ＝ 12\n②次に足し算・引き算を左から計算する。\n　12 − 5 ＝ 7\n　7 + 8 ＝ 15\n答え：15',
  },
  {
    id: 'kiso_sansu_002',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '次の計算をしなさい。\n(15 + 9) × 4 ÷ 8 − 7',
    answer: '5',
    hint: 'かっこの中を先に計算する。',
    explanation:
      '【解説】\n①かっこの中を計算する。\n　15 + 9 ＝ 24\n②掛け算・割り算を左から計算する。\n　24 × 4 ＝ 96\n　96 ÷ 8 ＝ 12\n③引き算を計算する。\n　12 − 7 ＝ 5\n答え：5',
  },
  {
    id: 'kiso_sansu_003',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '次の計算をしなさい。\n100 − (3 × 12 + 4) ÷ 8',
    answer: '95',
    hint: 'かっこの中の掛け算を先に計算し、かっこ全体を計算してから割り算を行う。',
    explanation:
      '【解説】\n①かっこの中を計算する。\n　3 × 12 ＝ 36\n　36 + 4 ＝ 40\n②割り算を計算する。\n　40 ÷ 8 ＝ 5\n③引き算を計算する。\n　100 − 5 ＝ 95\n答え：95',
  },
  {
    id: 'kiso_sansu_004',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '次の計算をしなさい。\n18 × 5 − 36 ÷ 4 + 11',
    answer: '92',
    hint: '掛け算・割り算を先にすべて計算してから、足し引きをする。',
    explanation:
      '【解説】\n①掛け算・割り算を左から計算する。\n　18 × 5 ＝ 90\n　36 ÷ 4 ＝ 9\n②左から足し引きを計算する。\n　90 − 9 ＝ 81\n　81 + 11 ＝ 92\n答え：92',
  },
  {
    id: 'kiso_sansu_005',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '次の計算をしなさい。\n7 × (40 − 25) ÷ 3 + 2',
    answer: '37',
    hint: 'かっこを先に計算し、次に掛け算・割り算をする。',
    explanation:
      '【解説】\n①かっこを計算する。\n　40 − 25 ＝ 15\n②掛け算・割り算を左から計算する。\n　7 × 15 ＝ 105\n　105 ÷ 3 ＝ 35\n③足し算を計算する。\n　35 + 2 ＝ 37\n答え：37',
  },
  {
    id: 'kiso_sansu_006',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '次の計算をしなさい。\n64 ÷ (2 × 4) + 3 × 6',
    answer: '26',
    hint: 'かっこの中を計算し、次に掛け算・割り算、最後に足し算をする。',
    explanation:
      '【解説】\n①かっこの中を計算する。\n　2 × 4 ＝ 8\n②掛け算・割り算を左から計算する。\n　64 ÷ 8 ＝ 8\n　3 × 6 ＝ 18\n③足し算を計算する。\n　8 + 18 ＝ 26\n答え：26',
  },
  {
    id: 'kiso_sansu_007',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '次の計算をしなさい。\n(56 − 14) ÷ 6 × 5 − 15',
    answer: '20',
    hint: 'かっこを先に計算し、左から順に掛け算・割り算を行う。',
    explanation:
      '【解説】\n①かっこを計算する。\n　56 − 14 ＝ 42\n②左から掛け算・割り算を計算する。\n　42 ÷ 6 ＝ 7\n　7 × 5 ＝ 35\n③引き算を計算する。\n　35 − 15 ＝ 20\n答え：20',
  },
  {
    id: 'kiso_sansu_008',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '次の計算をしなさい。\n9 + 4 × (13 − 7) − 2 × 8',
    answer: '17',
    hint: 'かっこを先に計算してから、掛け算、最後に足し引きを行う。',
    explanation:
      '【解説】\n①かっこを計算する。\n　13 − 7 ＝ 6\n②掛け算を計算する。\n　4 × 6 ＝ 24\n　2 × 8 ＝ 16\n③左から足し引きを計算する。\n　9 + 24 − 16 ＝ 17\n答え：17',
  },
  {
    id: 'kiso_sansu_009',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '次の計算をしなさい。\n150 ÷ 5 ÷ 2 × 4 − 30',
    answer: '30',
    hint: '左から順に割り算を行い、次に掛け算、最後に引き算をする。',
    explanation:
      '【解説】\n①左から順に計算する。\n　150 ÷ 5 ＝ 30\n　30 ÷ 2 ＝ 15\n　15 × 4 ＝ 60\n②引き算を計算する。\n　60 − 30 ＝ 30\n答え：30',
  },
  {
    id: 'kiso_sansu_010',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '次の計算をしなさい。\n(100 − 4 × 15) ÷ (7 − 2)',
    answer: '8',
    hint: 'かっこの中をそれぞれ計算してから、最後に割り算をする。',
    explanation:
      '【解説】\n①左のかっこを計算する。\n　4 × 15 ＝ 60\n　100 − 60 ＝ 40\n②右のかっこを計算する。\n　7 − 2 ＝ 5\n③割り算を計算する。\n　40 ÷ 5 ＝ 8\n答え：8',
  },

  // ============================================================
  // 分数・小数の計算: 10問 (011–020)
  // ============================================================
  {
    id: 'kiso_sansu_011',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '次の計算をしなさい。\n2/3 + 3/4',
    answer: '17/12',
    hint: '通分して分母をそろえてから足す。2/3の分母は4、3/4の分母は3でそろえる。',
    explanation:
      '【解説】\n①通分する（最小公倍数は12）。\n　2/3 ＝ 8/12\n　3/4 ＝ 9/12\n②分子を足す。\n　8/12 + 9/12 ＝ 17/12\n③約分できないか確認する。\n　17は素数なので約分できない。\n答え：17/12',
  },
  {
    id: 'kiso_sansu_012',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '次の計算をしなさい。\n5/6 − 1/4',
    answer: '7/12',
    hint: '通分して分母を12にそろえてから引く。',
    explanation:
      '【解説】\n①通分する（最小公倍数は12）。\n　5/6 ＝ 10/12\n　1/4 ＝ 3/12\n②分子を引く。\n　10/12 − 3/12 ＝ 7/12\n③約分できないか確認する。\n　7は素数なので約分できない。\n答え：7/12',
  },
  {
    id: 'kiso_sansu_013',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '次の計算をしなさい。\n3/4 × 8/9',
    answer: '2/3',
    hint: '分子どうし、分母どうしをかける。計算前に約分できないか確認する。',
    explanation:
      '【解説】\n①約分を先に行う（斜めの約分も使う）。\n　3/4 × 8/9\n　→ 3と9は3で約分: 1/4 × 8/3\n　→ 4と8は4で約分: 1/1 × 2/3\n②計算する。\n　1 × 2 ÷ (1 × 3) ＝ 2/3\n答え：2/3',
  },
  {
    id: 'kiso_sansu_014',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '次の計算をしなさい。\n5/6 ÷ 5/12',
    answer: '2',
    hint: '割り算は、割る数の逆数を掛ける。',
    explanation:
      '【解説】\n①割り算を掛け算に直す（割る数を逆数にする）。\n　5/6 ÷ 5/12 ＝ 5/6 × 12/5\n②約分を行う。\n　→ 5と5は約分: 1/6 × 12/1\n　→ 6と12は約分: 1/1 × 2/1\n③計算する。\n　1 × 2 ＝ 2\n答え：2',
  },
  {
    id: 'kiso_sansu_015',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '次の計算をしなさい。\n1.25 + 2.375',
    answer: '3.625',
    hint: '小数点の位置をそろえて計算する。',
    explanation:
      '【解説】\n①小数点の位置をそろえて足す。\n　  1.250\n＋ 2.375\n─────────\n　  3.625\n答え：3.625',
  },
  {
    id: 'kiso_sansu_016',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '次の計算をしなさい。\n3.6 × 2.5',
    answer: '9',
    hint: '整数同士の掛け算をして、小数点を合わせる。',
    explanation:
      '【解説】\n①整数として計算する（小数点を無視して）。\n　36 × 25 ＝ 900\n②小数点を戻す（3.6は1桁、2.5は1桁なので合計2桁移動）。\n　900 → 9.00 ＝ 9\n答え：9',
  },
  {
    id: 'kiso_sansu_017',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '次の計算をしなさい。\n7.2 ÷ 0.4',
    answer: '18',
    hint: '割る数を整数にするために、両方を10倍する。',
    explanation:
      '【解説】\n①割る数を整数にする。\n　7.2 ÷ 0.4\n　＝ 72 ÷ 4（両方10倍）\n②計算する。\n　72 ÷ 4 ＝ 18\n答え：18',
  },
  {
    id: 'kiso_sansu_018',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '次の計算をしなさい。\n1と1/2 × 2/3 + 1/4',
    answer: '1と1/4',
    hint: '帯分数を仮分数に直してから計算する。',
    explanation:
      '【解説】\n①帯分数を仮分数に直す。\n　1と1/2 ＝ 3/2\n②掛け算を先に計算する。\n　3/2 × 2/3 ＝ 6/6 ＝ 1\n③足し算を計算する。\n　1 + 1/4 ＝ 4/4 + 1/4 ＝ 5/4\n④帯分数に直す。\n　5/4 ＝ 1と1/4\n答え：1と1/4',
  },
  {
    id: 'kiso_sansu_019',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '次の計算をしなさい。\n0.75を分数で表しなさい。',
    answer: '3/4',
    hint: '0.75は75/100。最大公約数で約分する。',
    explanation:
      '【解説】\n①小数を分数に直す。\n　0.75 ＝ 75/100\n②最大公約数を求める（75と100の最大公約数は25）。\n　75 ÷ 25 ＝ 3\n　100 ÷ 25 ＝ 4\n③約分する。\n　75/100 ＝ 3/4\n答え：3/4',
  },
  {
    id: 'kiso_sansu_020',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '次の計算をしなさい。\n2/5 + 0.6 （答えは小数で表しなさい）',
    answer: '1',
    hint: '分数を小数に直してから計算する。2/5＝0.4。',
    explanation:
      '【解説】\n①分数を小数に直す。\n　2/5 ＝ 0.4\n②足し算を計算する。\n　0.4 + 0.6 ＝ 1.0 ＝ 1\n答え：1',
  },

  // ============================================================
  // 比・割合: 10問 (021–030)
  // ============================================================
  {
    id: 'kiso_sansu_021',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '500円の商品が20%引きで売られています。売値はいくらですか？',
    answer: '400円',
    hint: '20%引きなので、残りは80%。500 × 0.8を計算する。',
    explanation:
      '【解説】\n①割引後の割合を求める。\n　100% − 20% ＝ 80%\n②売値を計算する。\n　500 × 0.8 ＝ 400（円）\nまたは：\n　値引き額：500 × 0.2 ＝ 100（円）\n　売値：500 − 100 ＝ 400（円）\n答え：400円',
  },
  {
    id: 'kiso_sansu_022',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: 'クラスの生徒40人のうち、25%が眼鏡をかけています。眼鏡をかけている人は何人ですか？',
    answer: '10人',
    hint: '40 × 0.25を計算する。',
    explanation:
      '【解説】\n①割合を小数に直す。\n　25% ＝ 0.25\n②人数を計算する。\n　40 × 0.25 ＝ 10（人）\n答え：10人',
  },
  {
    id: 'kiso_sansu_023',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '比を最も簡単な整数の比で表しなさい。\n24 ： 36',
    answer: '2：3',
    hint: '24と36の最大公約数で両方を割る。',
    explanation:
      '【解説】\n①24と36の最大公約数を求める。\n　24 ＝ 2³ × 3、36 ＝ 2² × 3²\n　最大公約数 ＝ 2² × 3 ＝ 12\n②両方を12で割る。\n　24 ÷ 12 ＝ 2\n　36 ÷ 12 ＝ 3\n③最簡比：2 ： 3\n答え：2：3',
  },
  {
    id: 'kiso_sansu_024',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: 'A君とB君が合わせて120枚のカードを持っています。A君とB君の枚数の比が3：2のとき、A君のカードは何枚ですか？',
    answer: '72枚',
    hint: '全体を3+2=5に分けて、A君の分を計算する。',
    explanation:
      '【解説】\n①比の合計を求める。\n　3 + 2 ＝ 5\n②1あたりの枚数を求める。\n　120 ÷ 5 ＝ 24（枚）\n③A君の枚数を求める。\n　24 × 3 ＝ 72（枚）\n答え：72枚',
  },
  {
    id: 'kiso_sansu_025',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '定価600円の品物を480円で買いました。何%引きですか？',
    answer: '20%',
    hint: '値引き額を定価で割って割合を求める。',
    explanation:
      '【解説】\n①値引き額を求める。\n　600 − 480 ＝ 120（円）\n②割引率を計算する。\n　120 ÷ 600 ＝ 0.2\n　0.2 ＝ 20%\n答え：20%',
  },
  {
    id: 'kiso_sansu_026',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: 'ある小学校の全校生徒は300人です。このうち女子は全体の44%です。男子は何人ですか？',
    answer: '168人',
    hint: '男子の割合は100%−44%＝56%。300×0.56を計算する。',
    explanation:
      '【解説】\n①男子の割合を求める。\n　100% − 44% ＝ 56%\n②男子の人数を計算する。\n　300 × 0.56 ＝ 168（人）\n答え：168人',
  },
  {
    id: 'kiso_sansu_027',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: 'A：B＝3：5、B：C＝2：3のとき、A：B：Cを求めなさい。',
    answer: '6：10：15',
    hint: 'BをAとCの比の共通の値にそろえる。B＝10にそろえる。',
    explanation:
      '【解説】\n①A：B ＝ 3：5\n②B：C ＝ 2：3\n③Bを共通の数にそろえる。\n　A：B ＝ 3：5 → 6：10（2倍）\n　B：C ＝ 2：3 → 10：15（5倍）\n④まとめる。\n　A：B：C ＝ 6：10：15\n答え：6：10：15',
  },
  {
    id: 'kiso_sansu_028',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: 'ある商品を定価の3割引きで買ったら720円でした。定価はいくらですか？',
    answer: '1000円',
    hint: '3割引き後は定価の7割。720÷0.7を計算する。',
    explanation:
      '【解説】\n①割引後の割合を求める。\n　100% − 30% ＝ 70% ＝ 0.7\n②定価を□として式を立てる。\n　□ × 0.7 ＝ 720\n③定価を計算する。\n　□ ＝ 720 ÷ 0.7 ＝ 1000（円）\n答え：1000円',
  },
  {
    id: 'kiso_sansu_029',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '比を最も簡単な整数の比で表しなさい。\n0.6 ： 0.9',
    answer: '2：3',
    hint: '両方を10倍して整数にしてから最大公約数で割る。',
    explanation:
      '【解説】\n①両方を10倍して整数にする。\n　0.6 × 10 ＝ 6\n　0.9 × 10 ＝ 9\n②6と9の最大公約数は3。\n　6 ÷ 3 ＝ 2\n　9 ÷ 3 ＝ 3\n③最簡比：2 ： 3\n答え：2：3',
  },
  {
    id: 'kiso_sansu_030',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '売価1200円は定価の4/5です。定価はいくらですか？',
    answer: '1500円',
    hint: '定価を□として、□×4/5＝1200の式を立てる。',
    explanation:
      '【解説】\n①式を立てる。\n　定価 × 4/5 ＝ 1200\n②定価を求める。\n　定価 ＝ 1200 ÷ 4/5\n　　　＝ 1200 × 5/4\n　　　＝ 6000/4\n　　　＝ 1500（円）\n答え：1500円',
  },

  // ============================================================
  // 速さ・時間・距離: 10問 (031–040)
  // ============================================================
  {
    id: 'kiso_sansu_031',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'very-high',
    question: '時速60kmの車が3時間走りました。走った距離は何kmですか？',
    answer: '180km',
    hint: '距離＝速さ×時間。60×3を計算する。',
    explanation:
      '【解説】\n①公式を確認する。\n　距離 ＝ 速さ × 時間\n②計算する。\n　60 × 3 ＝ 180（km）\n答え：180km',
  },
  {
    id: 'kiso_sansu_032',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'very-high',
    question: '120kmの道のりを時速80kmで走ると何時間かかりますか？',
    answer: '1時間30分',
    hint: '時間＝距離÷速さ。120÷80を計算する。',
    explanation:
      '【解説】\n①公式を確認する。\n　時間 ＝ 距離 ÷ 速さ\n②計算する。\n　120 ÷ 80 ＝ 1.5（時間）\n③時間・分に直す。\n　0.5時間 ＝ 0.5 × 60 ＝ 30（分）\n④1時間30分\n答え：1時間30分',
  },
  {
    id: 'kiso_sansu_033',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '分速80mで歩くと、学校まで15分かかります。学校までの距離は何mですか？',
    answer: '1200m',
    hint: '距離＝速さ×時間。80×15を計算する。',
    explanation:
      '【解説】\n①公式を確認する。\n　距離 ＝ 速さ × 時間\n②計算する。\n　80 × 15 ＝ 1200（m）\n答え：1200m',
  },
  {
    id: 'kiso_sansu_034',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '2400mを20分で歩きました。分速何mですか？',
    answer: '分速120m',
    hint: '速さ＝距離÷時間。2400÷20を計算する。',
    explanation:
      '【解説】\n①公式を確認する。\n　速さ ＝ 距離 ÷ 時間\n②計算する。\n　2400 ÷ 20 ＝ 120（m/分）\n答え：分速120m',
  },
  {
    id: 'kiso_sansu_035',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: 'A地点からB地点まで、行きは時速4kmで2時間、帰りは時速6kmで歩きました。帰りにかかった時間は何分ですか？',
    answer: '80分',
    hint: '行きの距離を求めてから、帰りの時間を計算する。',
    explanation:
      '【解説】\n①行きの距離を求める。\n　4 × 2 ＝ 8（km）\n②帰りは同じ距離なので、かかった時間を求める。\n　8 ÷ 6 ＝ 4/3（時間）\n③分に直す。\n　4/3 × 60 ＝ 80（分）\n答え：80分',
  },
  {
    id: 'kiso_sansu_036',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '太郎君は毎分60mで歩き、次郎君は毎分80mで歩きます。同じ地点から同じ方向に同時に出発したとき、10分後に2人は何m離れていますか？',
    answer: '200m',
    hint: '10分後の各自の進んだ距離の差を求める。',
    explanation:
      '【解説】\n①10分後の太郎君の距離：60 × 10 ＝ 600（m）\n②10分後の次郎君の距離：80 × 10 ＝ 800（m）\n③差：800 − 600 ＝ 200（m）\n答え：200m',
  },
  {
    id: 'kiso_sansu_037',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '時速45kmを分速に直しなさい。',
    answer: '分速750m',
    hint: '時速をmに直してから60で割る。1km＝1000m、1時間＝60分。',
    explanation:
      '【解説】\n①時速45kmをmに直す。\n　45km ＝ 45000m\n②1時間は60分なので、分速を求める。\n　45000 ÷ 60 ＝ 750（m/分）\n答え：分速750m',
  },
  {
    id: 'kiso_sansu_038',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '花子さんは家から1800mの図書館まで分速60mで歩きました。途中で5分間休んだとすると、家を出てから図書館に着くまでに何分かかりましたか？',
    answer: '35分',
    hint: '歩いた時間と休んだ時間を合計する。',
    explanation:
      '【解説】\n①歩いた時間を求める。\n　1800 ÷ 60 ＝ 30（分）\n②休んだ時間を加える。\n　30 + 5 ＝ 35（分）\n答え：35分',
  },
  {
    id: 'kiso_sansu_039',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '長さ200mの電車が毎秒25mで走っています。この電車が全長500mのトンネルを通過するのに何秒かかりますか？',
    answer: '28秒',
    hint: '電車がトンネルを完全に通過するには、電車の長さ＋トンネルの長さを走る必要がある。',
    explanation:
      '【解説】\n①電車が走る必要がある距離を求める。\n　電車の長さ + トンネルの長さ\n　＝ 200 + 500 ＝ 700（m）\n②かかる時間を求める。\n　700 ÷ 25 ＝ 28（秒）\n答え：28秒',
  },
  {
    id: 'kiso_sansu_040',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: 'A君は毎分80mで歩きます。9時に家を出て学校（家から1600m）に向かいました。何時何分に着きますか？',
    answer: '9時20分',
    hint: '時間＝距離÷速さで何分かかるかを計算し、出発時刻に加える。',
    explanation:
      '【解説】\n①かかる時間を求める。\n　1600 ÷ 80 ＝ 20（分）\n②到着時刻を求める。\n　9時 + 20分 ＝ 9時20分\n答え：9時20分',
  },

  // ============================================================
  // 面積・周囲（長方形・三角形・円）: 10問 (041–050)
  // ============================================================
  {
    id: 'kiso_sansu_041',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '縦8cm、横12cmの長方形の面積と周囲の長さを求めなさい。',
    answer: '面積：96㎠、周囲：40cm',
    hint: '面積＝縦×横、周囲＝（縦+横）×2。',
    explanation:
      '【解説】\n①面積を求める。\n　8 × 12 ＝ 96（㎠）\n②周囲の長さを求める。\n　(8 + 12) × 2 ＝ 20 × 2 ＝ 40（cm）\n答え：面積96㎠、周囲40cm',
  },
  {
    id: 'kiso_sansu_042',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '底辺10cm、高さ6cmの三角形の面積を求めなさい。',
    answer: '30㎠',
    hint: '三角形の面積＝底辺×高さ÷2。',
    explanation:
      '【解説】\n①公式を使う。\n　面積 ＝ 底辺 × 高さ ÷ 2\n②計算する。\n　10 × 6 ÷ 2 ＝ 60 ÷ 2 ＝ 30（㎠）\n答え：30㎠',
  },
  {
    id: 'kiso_sansu_043',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '半径7cmの円の面積を求めなさい。（円周率は3.14とします）',
    answer: '153.86㎠',
    hint: '面積＝半径×半径×3.14。',
    explanation:
      '【解説】\n①公式を使う。\n　面積 ＝ 半径 × 半径 × 3.14\n②計算する。\n　7 × 7 ＝ 49\n　49 × 3.14 ＝ 153.86（㎠）\n答え：153.86㎠',
  },
  {
    id: 'kiso_sansu_044',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '直径10cmの円の周囲の長さ（円周）を求めなさい。（円周率は3.14とします）',
    answer: '31.4cm',
    hint: '円周＝直径×3.14。半径＝5cmなので、直径＝10cm。',
    explanation:
      '【解説】\n①公式を使う。\n　円周 ＝ 直径 × 3.14\n②計算する。\n　10 × 3.14 ＝ 31.4（cm）\n答え：31.4cm',
  },
  {
    id: 'kiso_sansu_045',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '1辺が5cmの正方形の面積と周囲の長さを求めなさい。',
    answer: '面積：25㎠、周囲：20cm',
    hint: '正方形の面積＝1辺×1辺、周囲＝1辺×4。',
    explanation:
      '【解説】\n①面積を求める。\n　5 × 5 ＝ 25（㎠）\n②周囲の長さを求める。\n　5 × 4 ＝ 20（cm）\n答え：面積25㎠、周囲20cm',
  },
  {
    id: 'kiso_sansu_046',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '平行四辺形の底辺が8cm、高さが6cmのとき、面積を求めなさい。',
    answer: '48㎠',
    hint: '平行四辺形の面積＝底辺×高さ。',
    explanation:
      '【解説】\n①公式を使う。\n　面積 ＝ 底辺 × 高さ\n②計算する。\n　8 × 6 ＝ 48（㎠）\n答え：48㎠',
  },
  {
    id: 'kiso_sansu_047',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '上底4cm、下底8cm、高さ5cmの台形の面積を求めなさい。',
    answer: '30㎠',
    hint: '台形の面積＝（上底＋下底）×高さ÷2。',
    explanation:
      '【解説】\n①公式を使う。\n　面積 ＝ (上底 + 下底) × 高さ ÷ 2\n②計算する。\n　(4 + 8) × 5 ÷ 2\n　＝ 12 × 5 ÷ 2\n　＝ 60 ÷ 2\n　＝ 30（㎠）\n答え：30㎠',
  },
  {
    id: 'kiso_sansu_048',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: 'ひし形の対角線が6cmと8cmのとき、面積を求めなさい。',
    answer: '24㎠',
    hint: 'ひし形の面積＝対角線×対角線÷2。',
    explanation:
      '【解説】\n①公式を使う。\n　面積 ＝ 対角線₁ × 対角線₂ ÷ 2\n②計算する。\n　6 × 8 ÷ 2 ＝ 48 ÷ 2 ＝ 24（㎠）\n答え：24㎠',
  },
  {
    id: 'kiso_sansu_049',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '半径6cmの半円の面積を求めなさい。（円周率は3.14とします）',
    answer: '56.52㎠',
    hint: '半円の面積＝円の面積÷2。半径×半径×3.14÷2。',
    explanation:
      '【解説】\n①円全体の面積を求める。\n　6 × 6 × 3.14 ＝ 36 × 3.14 ＝ 113.04（㎠）\n②半分にする。\n　113.04 ÷ 2 ＝ 56.52（㎠）\n答え：56.52㎠',
  },
  {
    id: 'kiso_sansu_050',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '縦6cm、横9cmの長方形から、底辺3cm・高さ4cmの三角形を切り取りました。残った図形の面積は何㎠ですか？',
    answer: '48㎠',
    hint: '長方形の面積から三角形の面積を引く。',
    explanation:
      '【解説】\n①長方形の面積を求める。\n　6 × 9 ＝ 54（㎠）\n②三角形の面積を求める。\n　3 × 4 ÷ 2 ＝ 6（㎠）\n③残った部分の面積を求める。\n　54 − 6 ＝ 48（㎠）\n答え：48㎠',
  },

  // ============================================================
  // 体積・表面積: 8問 (051–058)
  // ============================================================
  {
    id: 'kiso_sansu_051',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '縦4cm、横5cm、高さ6cmの直方体の体積を求めなさい。',
    answer: '120㎤',
    hint: '体積＝縦×横×高さ。',
    explanation:
      '【解説】\n①公式を使う。\n　体積 ＝ 縦 × 横 × 高さ\n②計算する。\n　4 × 5 × 6 ＝ 120（㎤）\n答え：120㎤',
  },
  {
    id: 'kiso_sansu_052',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '1辺が5cmの立方体の体積と表面積を求めなさい。',
    answer: '体積：125㎤、表面積：150㎠',
    hint: '体積＝1辺³、表面積＝1面の面積×6。',
    explanation:
      '【解説】\n①体積を求める。\n　5 × 5 × 5 ＝ 125（㎤）\n②1つの面の面積を求める。\n　5 × 5 ＝ 25（㎠）\n③表面積を求める（面は6つ）。\n　25 × 6 ＝ 150（㎠）\n答え：体積125㎤、表面積150㎠',
  },
  {
    id: 'kiso_sansu_053',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '底面が縦3cm・横4cmの長方形で、高さが8cmの直方体の表面積を求めなさい。',
    answer: '136㎠',
    hint: '表面積＝（前後の面+左右の面+上下の面）×2。',
    explanation:
      '【解説】\n①各面の面積を求める。\n　前後の面（3×8）：3 × 8 ＝ 24㎠ × 2面 ＝ 48㎠\n　左右の面（4×8）：4 × 8 ＝ 32㎠ × 2面 ＝ 64㎠\n　上下の面（3×4）：3 × 4 ＝ 12㎠ × 2面 ＝ 24㎠\n②合計する。\n　48 + 64 + 24 ＝ 136（㎠）\n答え：136㎠',
  },
  {
    id: 'kiso_sansu_054',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '底面の半径が3cm、高さが10cmの円柱の体積を求めなさい。（円周率は3.14とします）',
    answer: '282.6㎤',
    hint: '体積＝底面積×高さ＝半径×半径×3.14×高さ。',
    explanation:
      '【解説】\n①底面積を求める。\n　3 × 3 × 3.14 ＝ 9 × 3.14 ＝ 28.26（㎠）\n②体積を求める。\n　28.26 × 10 ＝ 282.6（㎤）\n答え：282.6㎤',
  },
  {
    id: 'kiso_sansu_055',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '底面が1辺6cmの正三角形（面積は15.6㎠とします）で、高さが10cmの三角柱の体積を求めなさい。',
    answer: '156㎤',
    hint: '体積＝底面積×高さ。底面積は15.6㎠が与えられている。',
    explanation:
      '【解説】\n①公式を使う。\n　体積 ＝ 底面積 × 高さ\n②計算する。\n　15.6 × 10 ＝ 156（㎤）\n答え：156㎤',
  },
  {
    id: 'kiso_sansu_056',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '底面の半径が4cm、高さが6cmの円柱の表面積を求めなさい。（円周率は3.14とします）',
    answer: '251.2㎠',
    hint: '表面積＝側面積＋底面積×2。側面を展開すると長方形になる。',
    explanation:
      '【解説】\n①底面積を求める（2枚分）。\n　4 × 4 × 3.14 × 2 ＝ 16 × 3.14 × 2 ＝ 100.48（㎠）\n②側面積を求める（展開すると長方形：幅＝円周、縦＝高さ）。\n　円周：4 × 2 × 3.14 ＝ 25.12（cm）\n　側面積：25.12 × 6 ＝ 150.72（㎠）\n③表面積を求める。\n　100.48 + 150.72 ＝ 251.2（㎠）\n答え：251.2㎠',
  },
  {
    id: 'kiso_sansu_057',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '底面が1辺4cmの正方形、高さが9cmの四角柱の体積と表面積を求めなさい。',
    answer: '体積：144㎤、表面積：176㎠',
    hint: '体積＝底面積×高さ、表面積＝底面×2＋側面4枚。',
    explanation:
      '【解説】\n①体積を求める。\n　4 × 4 × 9 ＝ 144（㎤）\n②表面積を求める。\n　底面（上下2枚）：4 × 4 × 2 ＝ 32（㎠）\n　側面（4枚）：4 × 9 × 4 ＝ 144（㎠）\n　合計：32 + 144 ＝ 176（㎠）\n答え：体積144㎤、表面積176㎠',
  },
  {
    id: 'kiso_sansu_058',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '縦3cm、横4cm、高さ5cmの直方体から、1辺2cmの立方体を1つくり抜きました。残った立体の体積は何㎤ですか？',
    answer: '52㎤',
    hint: '直方体の体積から立方体の体積を引く。',
    explanation:
      '【解説】\n①直方体の体積を求める。\n　3 × 4 × 5 ＝ 60（㎤）\n②立方体の体積を求める。\n　2 × 2 × 2 ＝ 8（㎤）\n③残った体積を求める。\n　60 − 8 ＝ 52（㎤）\n答え：52㎤',
  },

  // ============================================================
  // 数列・規則性: 8問 (059–066)
  // ============================================================
  {
    id: 'kiso_sansu_059',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '次の数列の□にあてはまる数を求めなさい。\n3, 6, 9, 12, □, 18',
    answer: '15',
    hint: '3ずつ増えている等差数列。',
    explanation:
      '【解説】\n①各項の差を確認する。\n　6−3＝3、9−6＝3、12−9＝3\n②差は3（等差数列）。\n③□ ＝ 12 + 3 ＝ 15\n④確認：15 + 3 ＝ 18 ✓\n答え：15',
  },
  {
    id: 'kiso_sansu_060',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '次の数列の10番目の数を求めなさい。\n2, 5, 8, 11, 14, …',
    answer: '29',
    hint: '3ずつ増える等差数列。n番目の数＝2＋(n−1)×3。',
    explanation:
      '【解説】\n①この数列の規則を確認する。\n　最初の数：2、公差：3\n②n番目の公式：2 + (n−1) × 3\n③10番目：2 + (10−1) × 3 ＝ 2 + 9 × 3 ＝ 2 + 27 ＝ 29\n答え：29',
  },
  {
    id: 'kiso_sansu_061',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '次の数列で□にあてはまる数を求めなさい。\n1, 2, 4, 8, □, 32',
    answer: '16',
    hint: '前の数を2倍している等比数列。',
    explanation:
      '【解説】\n①各項の比を確認する。\n　2÷1＝2、4÷2＝2、8÷4＝2\n②2倍ずつ増えている（等比数列）。\n③□ ＝ 8 × 2 ＝ 16\n④確認：16 × 2 ＝ 32 ✓\n答え：16',
  },
  {
    id: 'kiso_sansu_062',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '次のような規則で並んだ数列があります。\n1, 1, 2, 3, 5, 8, □, 21\n□にあてはまる数を求めなさい。',
    answer: '13',
    hint: '前の2つの数を足すと次の数になる（フィボナッチ数列）。',
    explanation:
      '【解説】\n①規則を確認する。\n　1+1＝2、1+2＝3、2+3＝5、3+5＝8、5+8＝13\n②□ ＝ 5 + 8 ＝ 13\n③確認：8 + 13 ＝ 21 ✓\n答え：13',
  },
  {
    id: 'kiso_sansu_063',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '1から20までの整数の和を求めなさい。',
    answer: '210',
    hint: '等差数列の和の公式：n×(最初+最後)÷2、またはペアを作る。',
    explanation:
      '【解説】\n①1+20＝21、2+19＝21、…のようにペアを作ると10組できる。\n②合計：21 × 10 ＝ 210\n（公式：n×(n+1)÷2 ＝ 20×21÷2 ＝ 210）\n答え：210',
  },
  {
    id: 'kiso_sansu_064',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '1, 4, 9, 16, 25, 36, □\n□にあてはまる数を求めなさい。',
    answer: '49',
    hint: '1²、2²、3²…と自然数の2乗の数列（平方数）。',
    explanation:
      '【解説】\n①規則を確認する。\n　1＝1²、4＝2²、9＝3²、16＝4²、25＝5²、36＝6²\n②次は7²。\n　7 × 7 ＝ 49\n答え：49',
  },
  {
    id: 'kiso_sansu_065',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '次のタイル並べで、5番目の図形には何枚のタイルが必要ですか？\n1番目：1枚、2番目：3枚、3番目：5枚、4番目：7枚',
    answer: '9枚',
    hint: '1から2ずつ増えていく等差数列。n番目＝2n−1。',
    explanation:
      '【解説】\n①規則を確認する。\n　1, 3, 5, 7, …（2ずつ増える）\n②5番目：7 + 2 ＝ 9（枚）\n（公式：2n−1 ＝ 2×5−1 ＝ 9）\n答え：9枚',
  },
  {
    id: 'kiso_sansu_066',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '次の数列の□にあてはまる数を求めなさい。\n100, 95, 85, 70, □, 25',
    answer: '50',
    hint: '減る量が5, 10, 15, 20, 25と増えていく。',
    explanation:
      '【解説】\n①各項の差を確認する。\n　100−95＝5、95−85＝10、85−70＝15、70−□＝20\n②差は5, 10, 15, 20と5ずつ増えている。\n③□ ＝ 70 − 20 ＝ 50\n④確認：50 − 25 ＝ 25 ✓（次の差は25）\n答え：50',
  },

  // ============================================================
  // 場合の数・組み合わせ（基礎）: 8問 (067–074)
  // ============================================================
  {
    id: 'kiso_sansu_067',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: 'A、B、C、Dの4人から1人代表者を選ぶ方法は何通りありますか？',
    answer: '4通り',
    hint: '1人選ぶだけなので、人数がそのまま答えになる。',
    explanation:
      '【解説】\n①A、B、C、Dの4人のどれかを1人選べばよい。\n②選び方は：A、B、C、Dの4通り。\n答え：4通り',
  },
  {
    id: 'kiso_sansu_068',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: 'A、B、C3人を一列に並べる並べ方は何通りありますか？',
    answer: '6通り',
    hint: '1番目に3通り、2番目に2通り、3番目に1通り。3×2×1を計算する。',
    explanation:
      '【解説】\n①1番目：A、B、Cの3通り\n②2番目：残り2人から2通り\n③3番目：残り1人から1通り\n④合計：3 × 2 × 1 ＝ 6（通り）\n具体的に書くと：ABC、ACB、BAC、BCA、CAB、CBA の6通り。\n答え：6通り',
  },
  {
    id: 'kiso_sansu_069',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: 'A、B、C、D、Eの5人から2人選ぶ選び方は何通りありますか？（選んだ2人の順序は関係ない）',
    answer: '10通り',
    hint: '組み合わせの公式：5×4÷（2×1）＝10。',
    explanation:
      '【解説】\n①5人から2人を順番込みで選ぶ（順列）と：5 × 4 ＝ 20（通り）\n②選んだ2人の順序が関係ないので、2人の並べ方の数（2！＝2）で割る。\n　20 ÷ 2 ＝ 10（通り）\n具体的に：AB、AC、AD、AE、BC、BD、BE、CD、CE、DEの10通り。\n答え：10通り',
  },
  {
    id: 'kiso_sansu_070',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '1、2、3の数字カードを使って3桁の整数を作ります。何通りできますか？（各数字は1回ずつ使う）',
    answer: '6通り',
    hint: '3枚のカードを一列に並べる順列。3×2×1＝6。',
    explanation:
      '【解説】\n①百の位：1、2、3の3通り\n②十の位：残り2枚から2通り\n③一の位：残り1枚から1通り\n④合計：3 × 2 × 1 ＝ 6（通り）\n実際の数字：123、132、213、231、312、321\n答え：6通り',
  },
  {
    id: 'kiso_sansu_071',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: 'コインを3回投げます。表と裏の出方は全部で何通りありますか？',
    answer: '8通り',
    hint: '各回2通りずつ。2×2×2を計算する。',
    explanation:
      '【解説】\n①1回目：表（オ）か裏（ウ）の2通り\n②2回目：2通り\n③3回目：2通り\n④合計：2 × 2 × 2 ＝ 8（通り）\n具体的に：オオオ、オオウ、オウオ、オウウ、ウオオ、ウオウ、ウウオ、ウウウ\n答え：8通り',
  },
  {
    id: 'kiso_sansu_072',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: 'Aの道からBの道を通りCへ行く道があります。AからBへの道が3本、BからCへの道が2本あるとき、AからCへの行き方は何通りありますか？',
    answer: '6通り',
    hint: 'AからBの道数×BからCの道数＝積の法則。',
    explanation:
      '【解説】\n①AからBへ：3通り\n②BからCへ：2通り\n③積の法則：3 × 2 ＝ 6（通り）\n答え：6通り',
  },
  {
    id: 'kiso_sansu_073',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '0、1、2、3の4枚のカードから3枚選んで3桁の整数を作ります。何個できますか？',
    answer: '18個',
    hint: '百の位に0は使えない。百の位の選び方を先に考える。',
    explanation:
      '【解説】\n①百の位：0以外（1、2、3）の3通り\n②十の位：残り3枚から3通り\n③一の位：残り2枚から2通り\n④合計：3 × 3 × 2 ＝ 18（個）\n答え：18個',
  },
  {
    id: 'kiso_sansu_074',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '1個のさいころを2回振ります。出た目の積が偶数になる確率を求めなさい。',
    answer: '3/4',
    hint: '余事象を使う。積が奇数になるのは、2回とも奇数の目のとき。',
    explanation:
      '【解説】\n①全体の場合の数：6 × 6 ＝ 36（通り）\n②積が奇数になる（2回とも奇数1,3,5）：3 × 3 ＝ 9（通り）\n③積が偶数になる場合の数：36 − 9 ＝ 27（通り）\n④確率：27/36 ＝ 3/4\n答え：3/4',
  },

  // ============================================================
  // 和差算・つるかめ算: 8問 (075–082)
  // ============================================================
  {
    id: 'kiso_sansu_075',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'very-high',
    question: '2つの数の和が50、差が14です。大きい方の数はいくつですか？',
    answer: '32',
    hint: '（和＋差）÷2＝大きい方の数。（和－差）÷2＝小さい方の数。',
    explanation:
      '【解説】\n①和差算の公式を使う。\n　大きい方 ＝ (和 + 差) ÷ 2\n②計算する。\n　(50 + 14) ÷ 2 ＝ 64 ÷ 2 ＝ 32\n③確認：小さい方 ＝ (50 − 14) ÷ 2 ＝ 18\n　32 + 18 ＝ 50 ✓　32 − 18 ＝ 14 ✓\n答え：32',
  },
  {
    id: 'kiso_sansu_076',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'very-high',
    question: 'つるとかめが合わせて10匹います。足の合計が28本のとき、つるは何羽ですか？',
    answer: '6羽',
    hint: 'もし全部かめだとしたら、足の数は何本？実際との差を考える。',
    explanation:
      '【解説】\n①全部かめだとすると、足の合計：10 × 4 ＝ 40（本）\n②実際との差：40 − 28 ＝ 12（本）\n③かめをつる（足が2本）に変えると、1匹あたり4−2＝2本減る。\n④つるの数：12 ÷ 2 ＝ 6（羽）\n⑤確認：かめ4匹×4本 + つる6羽×2本 ＝ 16 + 12 ＝ 28本 ✓\n答え：6羽',
  },
  {
    id: 'kiso_sansu_077',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: 'A君とB君の所持金の合計は1800円で、A君の方がB君より200円多い。A君の所持金はいくらですか？',
    answer: '1000円',
    hint: '（和＋差）÷2でA君の金額を求める。',
    explanation:
      '【解説】\n①和差算の公式を使う。\n　A君 ＝ (和 + 差) ÷ 2\n②計算する。\n　(1800 + 200) ÷ 2 ＝ 2000 ÷ 2 ＝ 1000（円）\n③確認：B君 ＝ 1800 − 1000 ＝ 800円\n　1000 − 800 ＝ 200円の差 ✓\n答え：1000円',
  },
  {
    id: 'kiso_sansu_078',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '1本50円の鉛筆と1本80円のボールペンを合わせて15本買い、合計870円払いました。鉛筆は何本買いましたか？',
    answer: '11本',
    hint: '全部鉛筆だとしたら合計はいくら？実際との差から考える。',
    explanation:
      '【解説】\n①全部鉛筆（50円）だとすると：50 × 15 ＝ 750（円）\n②実際との差：870 − 750 ＝ 120（円）\n③鉛筆1本をボールペン1本に替えると、80−50＝30円増える。\n④ボールペンの本数：120 ÷ 30 ＝ 4（本）\n⑤鉛筆の本数：15 − 4 ＝ 11（本）\n⑥確認：50×11 + 80×4 ＝ 550 + 320 ＝ 870円 ✓\n答え：11本',
  },
  {
    id: 'kiso_sansu_079',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '兄と弟のお小遣いの合計は4000円、兄の方が600円多い。弟のお小遣いはいくらですか？',
    answer: '1700円',
    hint: '弟のお小遣い＝（和−差）÷2。',
    explanation:
      '【解説】\n①弟のお小遣いを求める公式を使う。\n　弟 ＝ (和 − 差) ÷ 2\n②計算する。\n　(4000 − 600) ÷ 2 ＝ 3400 ÷ 2 ＝ 1700（円）\n③確認：兄 ＝ 4000 − 1700 ＝ 2300円\n　2300 − 1700 ＝ 600円の差 ✓\n答え：1700円',
  },
  {
    id: 'kiso_sansu_080',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: 'ある公園に自転車（2輪）と三輪車（3輪）が合わせて18台あります。車輪の合計が44個のとき、自転車は何台ありますか？',
    answer: '10台',
    hint: '全部自転車だとしたら車輪は何個？実際との差から三輪車の数を求める。',
    explanation:
      '【解説】\n①全部自転車（2輪）だとすると：2 × 18 ＝ 36（個）\n②実際との差：44 − 36 ＝ 8（個）\n③自転車を三輪車に変えると1台あたり3−2＝1輪増える。\n④三輪車の台数：8 ÷ 1 ＝ 8（台）\n⑤自転車の台数：18 − 8 ＝ 10（台）\n⑥確認：2×10 + 3×8 ＝ 20 + 24 ＝ 44（個） ✓\n答え：10台',
  },
  {
    id: 'kiso_sansu_081',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: 'テストで正解すると4点、不正解だと2点引かれます。20問全部解いて合計74点でした。正解は何問ですか？',
    answer: '19問',
    hint: '全問正解だとしたら何点？実際との差から不正解の数を求める。',
    explanation:
      '【解説】\n①全問正解だとすると：4 × 20 ＝ 80（点）\n②実際との差：80 − 74 ＝ 6（点）\n③1問間違えると、4点の正解が−2点の不正解になるので：4 + 2 ＝ 6点減る。\n④不正解の問数：6 ÷ 6 ＝ 1（問）\n⑤正解の問数：20 − 1 ＝ 19（問）\n⑥確認：4×19 − 2×1 ＝ 76 − 2 ＝ 74（点） ✓\n答え：19問',
  },
  {
    id: 'kiso_sansu_082',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: 'ある整数の2倍から15を引くと、その整数に3を足した数になります。その整数はいくつですか？',
    answer: '18',
    hint: '整数を□として式を立てる。2×□−15＝□+3。',
    explanation:
      '【解説】\n①整数を□として式を立てる。\n　2 × □ − 15 ＝ □ + 3\n②□を左辺に、数字を右辺にまとめる。\n　2□ − □ ＝ 3 + 15\n　□ ＝ 18\n③確認する。\n　左辺：2 × 18 − 15 ＝ 36 − 15 ＝ 21\n　右辺：18 + 3 ＝ 21 ✓\n答え：18',
  },

  // ============================================================
  // 平均・集合: 8問 (083–090)
  // ============================================================
  {
    id: 'kiso_sansu_083',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '5人のテストの点数が72、85、90、68、75点でした。平均点は何点ですか？',
    answer: '78点',
    hint: '平均＝合計÷個数。5つの点数の合計を5で割る。',
    explanation:
      '【解説】\n①合計を求める。\n　72 + 85 + 90 + 68 + 75 ＝ 390（点）\n②平均を求める。\n　390 ÷ 5 ＝ 78（点）\n答え：78点',
  },
  {
    id: 'kiso_sansu_084',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '4回のテストの平均点が82点でした。5回目のテストで何点取れば、平均点が84点になりますか？',
    answer: '92点',
    hint: '5回の合計を求めて、そこから4回分の合計を引く。',
    explanation:
      '【解説】\n①4回の合計を求める。\n　82 × 4 ＝ 328（点）\n②5回後の平均を84点にするための合計を求める。\n　84 × 5 ＝ 420（点）\n③5回目の点数を求める。\n　420 − 328 ＝ 92（点）\n答え：92点',
  },
  {
    id: 'kiso_sansu_085',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: 'クラス30人の身長の平均は155cmでした。あと5人加わったところ、全員の平均が156cmになりました。後から加わった5人の平均身長は何cmですか？',
    answer: '162cm',
    hint: '最初の30人の合計と最終の35人の合計を使って計算する。',
    explanation:
      '【解説】\n①最初の30人の合計を求める。\n　155 × 30 ＝ 4650（cm）\n②35人の合計を求める。\n　156 × 35 ＝ 5460（cm）\n③後から加わった5人の合計を求める。\n　5460 − 4650 ＝ 810（cm）\n④5人の平均を求める。\n　810 ÷ 5 ＝ 162（cm）\n答え：162cm',
  },
  {
    id: 'kiso_sansu_086',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: 'クラス40人のうち、算数が好きな人が25人、理科が好きな人が20人、どちらも好きな人が10人います。どちらも好きでない人は何人ですか？',
    answer: '5人',
    hint: '集合の公式：A∪B＝A+B−A∩B。どちらかが好きな人数を求めてから全体から引く。',
    explanation:
      '【解説】\n①算数か理科のどちらかが好きな人数を求める。\n　（算数が好き）+（理科が好き）−（どちらも好き）\n　＝ 25 + 20 − 10 ＝ 35（人）\n②どちらも好きでない人数を求める。\n　40 − 35 ＝ 5（人）\n答え：5人',
  },
  {
    id: 'kiso_sansu_087',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '6人グループのテストの平均点は75点でした。1人が欠席で5人の平均点を求めると73点でした。欠席した人の点数は何点ですか？',
    answer: '85点',
    hint: '6人の合計から5人の合計を引く。',
    explanation:
      '【解説】\n①6人の合計を求める。\n　75 × 6 ＝ 450（点）\n②5人の合計を求める。\n　73 × 5 ＝ 365（点）\n③欠席者の点数を求める。\n　450 − 365 ＝ 85（点）\n答え：85点',
  },
  {
    id: 'kiso_sansu_088',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '45人のクラスでアンケートをとりました。犬が好きな人が28人、猫が好きな人が18人でした。どちらも好きでない人が6人のとき、どちらも好きな人は何人ですか？',
    answer: '7人',
    hint: 'どちらかが好きな人＝全体−どちらも好きでない人。その後、集合の公式を使う。',
    explanation:
      '【解説】\n①どちらかが好きな人数を求める。\n　45 − 6 ＝ 39（人）\n②集合の公式：A∪B＝A+B−A∩B より\n　A∩B ＝ A + B − A∪B\n　＝ 28 + 18 − 39 ＝ 7（人）\n答え：7人',
  },
  {
    id: 'kiso_sansu_089',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '算数のテスト（100点満点）を5人で受けました。点数は65、70、80、90、95点でした。中央値（メジアン）は何点ですか？',
    answer: '80点',
    hint: '5人を小さい順に並べて、中央（3番目）の値を見つける。',
    explanation:
      '【解説】\n①小さい順に並べる（すでに並んでいる）。\n　65、70、80、90、95\n②5人の中央（3番目）の値を見つける。\n　1番目：65、2番目：70、3番目：80、4番目：90、5番目：95\n③中央値は3番目の値。\n　中央値 ＝ 80（点）\n答え：80点',
  },
  {
    id: 'kiso_sansu_090',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '10人の身長（cm）：148、152、155、156、158、160、162、165、168、172\nこのデータの平均、中央値を求めなさい。',
    answer: '平均：159.6cm、中央値：159cm',
    hint: '平均は合計÷10。中央値は10人なので5番目と6番目の平均。',
    explanation:
      '【解説】\n①合計を求める。\n　148+152+155+156+158+160+162+165+168+172\n　＝ 1596（cm）\n②平均を求める。\n　1596 ÷ 10 ＝ 159.6（cm）\n③中央値を求める（10人なので5番目と6番目の平均）。\n　5番目：158、6番目：160\n　(158 + 160) ÷ 2 ＝ 318 ÷ 2 ＝ 159（cm）\n答え：平均159.6cm、中央値159cm',
  },

  // ============================================================
  // 単位換算: 5問 (091–095)
  // ============================================================
  {
    id: 'kiso_sansu_091',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '3.5kmを何mですか？また、何cmですか？',
    answer: '3500m、350000cm',
    hint: '1km＝1000m、1m＝100cm。',
    explanation:
      '【解説】\n①kmをmに直す。\n　3.5 km ＝ 3.5 × 1000 ＝ 3500（m）\n②mをcmに直す。\n　3500 m ＝ 3500 × 100 ＝ 350000（cm）\n答え：3500m、350000cm',
  },
  {
    id: 'kiso_sansu_092',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '2時間30分は何分ですか？また、何秒ですか？',
    answer: '150分、9000秒',
    hint: '1時間＝60分、1分＝60秒。',
    explanation:
      '【解説】\n①時間を分に直す。\n　2時間30分 ＝ 2 × 60 + 30 ＝ 120 + 30 ＝ 150（分）\n②分を秒に直す。\n　150 分 ＝ 150 × 60 ＝ 9000（秒）\n答え：150分、9000秒',
  },
  {
    id: 'kiso_sansu_093',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '4500㎡を何aですか？また、何haですか？（1a＝100㎡、1ha＝10000㎡）',
    answer: '45a、0.45ha',
    hint: '1a＝100㎡なので÷100、1ha＝10000㎡なので÷10000。',
    explanation:
      '【解説】\n①㎡をaに直す。\n　4500 ÷ 100 ＝ 45（a）\n②㎡をhaに直す。\n　4500 ÷ 10000 ＝ 0.45（ha）\n答え：45a、0.45ha',
  },
  {
    id: 'kiso_sansu_094',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '2.5Lは何mLですか？また、何dLですか？（1L＝1000mL、1L＝10dL）',
    answer: '2500mL、25dL',
    hint: '1L＝1000mL（×1000）、1L＝10dL（×10）。',
    explanation:
      '【解説】\n①LをmLに直す。\n　2.5 × 1000 ＝ 2500（mL）\n②LをdLに直す。\n　2.5 × 10 ＝ 25（dL）\n答え：2500mL、25dL',
  },
  {
    id: 'kiso_sansu_095',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'medium',
    question: '次の単位換算をしなさい。\n（1）3.2t ＝ □ kg\n（2）8500g ＝ □ kg',
    answer: '（1）3200kg、（2）8.5kg',
    hint: '1t＝1000kg（×1000）、1kg＝1000g（÷1000）。',
    explanation:
      '【解説】\n①tをkgに直す。\n　3.2 t ＝ 3.2 × 1000 ＝ 3200（kg）\n②gをkgに直す。\n　8500 g ＝ 8500 ÷ 1000 ＝ 8.5（kg）\n答え：（1）3200kg、（2）8.5kg',
  },

  // ============================================================
  // 文章題（基礎）: 5問 (096–100)
  // ============================================================
  {
    id: 'kiso_sansu_096',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: 'りんごが何個かあります。6人に4個ずつ配ると8個余ります。りんごは全部で何個ありますか？',
    answer: '32個',
    hint: '6人に4個ずつ配った分＋余りの8個＝合計。',
    explanation:
      '【解説】\n①6人に4個ずつ配った数を求める。\n　4 × 6 ＝ 24（個）\n②余りを加える。\n　24 + 8 ＝ 32（個）\n答え：32個',
  },
  {
    id: 'kiso_sansu_097',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '折り紙が1束あります。1日目に全体の1/3を使い、2日目に残りの1/4を使いました。まだ使っていない折り紙が30枚のとき、最初に何枚ありましたか？',
    answer: '60枚',
    hint: '残りの割合を計算してから逆算する。',
    explanation:
      '【解説】\n①1日目後の残り：\n　1 − 1/3 ＝ 2/3\n②2日目後の残り：\n　2/3 × (1 − 1/4) ＝ 2/3 × 3/4 ＝ 6/12 ＝ 1/2\n③残りが全体の1/2で30枚なので：\n　全体 × 1/2 ＝ 30\n　全体 ＝ 30 × 2 ＝ 60（枚）\n答え：60枚',
  },
  {
    id: 'kiso_sansu_098',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: 'A、B2つの水槽があります。Aには36Lの水が入っており、BにはAより12L少ない水が入っています。BからAへ何L移せば、AとBの水の量が同じになりますか？',
    answer: '6L',
    hint: 'AとBの差12Lを2等分したLを移せばよい。',
    explanation:
      '【解説】\n①Bの水の量を求める。\n　36 − 12 ＝ 24（L）\n②AとBの差を求める。\n　36 − 24 ＝ 12（L）\n③差の半分を移せば等しくなる。\n　12 ÷ 2 ＝ 6（L）\n④確認：\n　移した後のA：36 − 6 ＝ 30（L）\n　移した後のB：24 + 6 ＝ 30（L） ✓\n答え：6L',
  },
  {
    id: 'kiso_sansu_099',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: 'ある工場で、1日に製品を120個作ります。その中で不良品の割合が5%のとき、1週間（5日間）の不良品は何個ですか？',
    answer: '30個',
    hint: '1日の不良品数を求めてから5日分にする。',
    explanation:
      '【解説】\n①1日の不良品数を求める。\n　120 × 0.05 ＝ 6（個）\n②5日間の不良品数を求める。\n　6 × 5 ＝ 30（個）\n答え：30個',
  },
  {
    id: 'kiso_sansu_100',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    examFrequency: 'high',
    question: '太郎君の家から駅まで1.2kmあります。太郎君は毎分75mで歩き始めました。出発から10分後に兄が自転車（毎分200m）で追いかけました。兄が太郎君に追いつくのは、太郎君が出発してから何分後ですか？',
    answer: '16分後',
    hint: '兄が出発したときの2人の距離差を、毎分の縮まる差で割る。',
    explanation:
      '【解説】\n①太郎君が10分歩いた距離：\n　75 × 10 ＝ 750（m）\n②兄が出発したとき、太郎君は750m先にいる。\n③兄が1分に縮める差：\n　200 − 75 ＝ 125（m）\n④兄が追いつくまでの時間：\n　750 ÷ 125 ＝ 6（分）\n⑤太郎君の出発からの時間：\n　10 + 6 ＝ 16（分後）\n⑥確認：\n　太郎16分：75 × 16 ＝ 1200m\n　兄6分：200 × 6 ＝ 1200m ✓\n答え：16分後',
  },
];
