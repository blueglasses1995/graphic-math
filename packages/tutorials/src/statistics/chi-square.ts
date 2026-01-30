import { Tutorial } from '../types';

export const chiSquareTutorial: Tutorial = {
  id: 'chi-square',
  title: 'カイ二乗検定',
  description: 'カテゴリデータの独立性と適合度を検定する方法を学ぶ',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '数値でないデータの検定',
      content:
        '性別と商品の好みに関係はあるか？\nサイコロは公正か？\n\nこれらは「数値の平均」ではなく「カテゴリの度数」の問題です。\n\nカイ二乗検定は、カテゴリデータを扱える検定手法です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        'クロス集計表の値を変えて、カイ二乗統計量がどう変わるか試しましょう。\n\n期待度数と観測度数のズレが大きいとどうなりますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '適合度検定',
      content:
        'サイコロを60回振った結果: 1が15回, 2が8回, 3が10回, 4が12回, 5が7回, 6が8回\n\n公正なら各目は10回ずつのはず（期待度数）。\n\nχ² = Σ(観測-期待)²/期待\n= (15-10)²/10 + (8-10)²/10 + ... = 5.2\n\n自由度5のカイ二乗分布で p値を計算。\np = 0.39 > 0.05 なので「公正でないとは言えない」。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '独立性の検定',
      content:
        '性別と血液型は関連があるか？\n\nクロス集計表を作り、「もし独立なら」の期待度数を計算します。\n\n期待度数 = (行合計 × 列合計) / 総数\n\n観測度数と期待度数のズレが大きければ、2つの変数は独立ではない（関連がある）と結論します。\n\n自由度 = (行数-1) × (列数-1)',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '予測してみよう',
      content:
        '観測度数が期待度数と完全に一致したとき、χ²の値はいくつになりますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '観測度数 = 期待度数のとき、χ²は？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '0', correct: true },
          { id: 'c', label: '無限大', correct: false },
          { id: 'd', label: '自由度と同じ', correct: false },
        ],
        explanation:
          '正解は 0 です。\n\nχ² = Σ(観測-期待)²/期待 で、観測=期待なら全ての項が0になります。\n\nχ² = 0 は「データが期待通り」= 「H₀に完全に合致」を意味します。\n\nχ²が大きいほどH₀からのズレが大きいことを示します。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：フィッシャーの正確検定',
      content:
        'カイ二乗検定は近似的な検定です。\n\n期待度数が小さい（5未満）セルがあると近似が悪くなります。\n\nそのような場合はフィッシャーの正確検定を使います。\n\nまた、2×2の表で連続性の補正（イェーツの補正）を適用することもあります。\n\nデータの特性に応じて適切な方法を選ぶことが重要です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        'カイ二乗検定はカテゴリデータの検定手法です。\n\n適合度検定: データが特定の分布に従うか\n独立性の検定: 2つのカテゴリ変数が独立か\n\nχ² = Σ(観測-期待)²/期待\n\n期待度数が小さい場合は正確検定を使います。\n\n次は「相関と因果」── 統計分析で最も注意すべき区別を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
