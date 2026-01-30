import { Tutorial } from '../types';

export const logPowerTutorial: Tutorial = {
  id: 'log-power',
  title: '対数法則：累乗→掛け算',
  description: 'log(A^n) = n × log A の法則を視覚的に理解する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '累乗が掛け算になる',
      content:
        'log₂(8²) = 2 × log₂(8) = 2 × 3 = 6。確かに 8² = 64 で log₂(64) = 6。対数の世界では累乗が単純な掛け算になります。',
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
        '底、真数、指数を変えて log(A^n) と n × log(A) が一致することを確認してください。',
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
      title: 'なぜ成り立つのか',
      content:
        'A^n = A × A × ... × A（n個）なので、積の法則を繰り返し適用すると log(A^n) = log A + log A + ... + log A = n × log A となります。',
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
      title: '具体例: log₁₀(1000000)',
      content:
        'log₁₀(1000000) = log₁₀(10⁶) = 6 × log₁₀(10) = 6 × 1 = 6。累乗の法則を使えば、大きな数の対数も簡単に求められます。',
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
        'log₂(4³) の値はいくつ？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'log₂(4³) はいくつ？',
        options: [
          { id: 'a', label: '4', correct: false },
          { id: 'b', label: '6', correct: true },
          { id: 'c', label: '8', correct: false },
          { id: 'd', label: '12', correct: false },
        ],
        explanation:
          'log₂(4³) = 3 × log₂(4) = 3 × 2 = 6。確かに 4³ = 64 = 2⁶ です。',
      },
    },
    {
      id: 'alternate',
      title: '平方根への応用',
      content:
        '平方根は1/2乗なので:\n\nlog(√A) = log(A^(1/2)) = (1/2) × log A\n\n同様に立方根は:\nlog(∛A) = (1/3) × log A\n\n累乗の法則は整数だけでなく、分数の指数にも使えます。',
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
        'log(A^n) = n × log A。対数は累乗を掛け算に変換します。平方根や立方根にも適用できます。\n\n自由に値を変えてこの法則を確かめてみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
