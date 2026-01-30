import { Tutorial } from '../types';

export const hypothesisTestingTutorial: Tutorial = {
  id: 'hypothesis-testing',
  title: '仮説検定の考え方',
  description: 'データに基づいて仮説を検証する統計的推論の枠組みを学ぶ',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '「効果がある」と言い切れるか',
      content:
        '新しい薬を飲んだグループの方が回復率が高かった。\n\nでもそれは「たまたま」かもしれません。\n\n本当に薬に効果があるのか、それとも偶然なのか？\n\nこの問いに答える仕組みが「仮説検定」です。',
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
        'コインを何度も投げて、表が出る割合を記録しましょう。\n\nもし60%が表だったとき、コインは公正でしょうか？何回投げれば判断できますか？',
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
      title: '帰無仮説と対立仮説',
      content:
        '検定では2つの仮説を立てます。\n\n帰無仮説 H₀: 「差がない」「効果がない」（否定したい仮説）\n対立仮説 H₁: 「差がある」「効果がある」（証明したい仮説）\n\n例: コインが公正かどうか\nH₀: 表の確率 = 0.5（公正）\nH₁: 表の確率 ≠ 0.5（公正でない）\n\n「H₀が正しいと仮定して」データを評価し、矛盾があればH₀を棄却します。',
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
      title: '背理法の考え方',
      content:
        '仮説検定は数学の「背理法」に似ています。\n\n1. H₀が正しいと仮定する\n2. その仮定のもとで、観測データが起こる確率を計算する\n3. その確率が非常に小さければ、仮定（H₀）が間違っていると結論する\n\n「コインが公正なら100回中80回表は極めて起こりにくい → コインは公正でない」\n\nこの「極めて起こりにくい」の基準が有意水準（通常5%）です。',
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
        'p値が0.03だったとき、有意水準5%でH₀は棄却されますか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'p値=0.03、有意水準5%のとき、H₀は？',
        options: [
          { id: 'a', label: '棄却される', correct: true },
          { id: 'b', label: '棄却されない', correct: false },
          { id: 'c', label: '判断できない', correct: false },
          { id: 'd', label: 'データが不足', correct: false },
        ],
        explanation:
          '正解は「棄却される」です。\n\np値(0.03) < 有意水準(0.05) なので、H₀を棄却します。\n\n「H₀が正しいとしたら、このデータが得られる確率は3%しかない。これは十分に珍しいので、H₀は間違っているだろう」という推論です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：裁判に例える',
      content:
        '仮説検定は裁判に似ています。\n\nH₀ = 「無罪」（推定無罪の原則）\nH₁ = 「有罪」\n\n証拠（データ）が十分に強ければ有罪（H₀棄却）。\n証拠不十分なら無罪（H₀を棄却できない）。\n\n「H₀を棄却できない」は「H₀が正しい」とは違います。\n「無罪判決 ≠ 実際に無実」と同じです。',
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
        '仮説検定の流れ:\n1. 帰無仮説H₀と対立仮説H₁を設定\n2. 有意水準を決める（通常5%）\n3. データからp値を計算\n4. p値 < 有意水準ならH₀を棄却\n\n「棄却できない ≠ 正しい」に注意。\n\n次はp値の正確な意味を詳しく学びます。',
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
