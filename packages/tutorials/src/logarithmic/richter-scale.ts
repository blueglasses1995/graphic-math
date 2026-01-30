import { Tutorial } from '../types';

export const richterScaleTutorial: Tutorial = {
  id: 'richter-scale',
  title: '【実践】リヒタースケール',
  description: '地震のマグニチュードが対数スケールである理由を学ぶ',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: 'マグニチュード1の差は32倍',
      content:
        'マグニチュード5とマグニチュード6の地震。数字では1しか違いませんが、エネルギーは約32倍も異なります。マグニチュードは対数スケールだからです。',
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
        'マグニチュードを変えて、対応するエネルギーの大きさを比較してください。線形スケールと対数スケールの違いを体感しましょう。',
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
      title: 'マグニチュードの定義',
      content:
        'リヒターのマグニチュード M は地震波の振幅 A の常用対数に基づきます。M = log₁₀(A/A₀)。マグニチュードが1上がると振幅は10倍、エネルギーは約31.6倍になります。',
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
      title: 'M7 と M9 の差',
      content:
        'M9 - M7 = 2。振幅は 10² = 100倍、エネルギーは 31.6² ≈ 1000倍。2011年の東日本大震災(M9.0)は、M7の地震の約1000倍のエネルギーでした。',
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
        'M5の地震のエネルギーを1とすると、M7の地震のエネルギーは約何倍？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'M5を基準にしたM7のエネルギー倍率は？',
        options: [
          { id: 'a', label: '約100倍', correct: false },
          { id: 'b', label: '約1000倍', correct: true },
          { id: 'c', label: '約2倍', correct: false },
          { id: 'd', label: '約10000倍', correct: false },
        ],
        explanation:
          'マグニチュード差2 → エネルギーは 31.6² ≈ 1000倍。対数スケールの小さな差が実際には巨大な差を意味します。',
      },
    },
    {
      id: 'alternate',
      title: 'なぜ対数スケールを使うのか',
      content:
        '地震のエネルギーは最小と最大で10の20乗以上の開きがあります。これを線形スケールで表すのは不可能。\n\n対数スケールなら M1〜M9 の範囲で表現できます。人間が扱いやすい数値に圧縮するのが対数の役割です。',
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
        'リヒタースケールは対数スケール。マグニチュード1の差は振幅10倍、エネルギー約32倍。巨大な範囲を扱いやすい数値に圧縮しています。\n\nマグニチュードを変えてエネルギーの違いを体感してください。',
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
