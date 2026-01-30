import { Tutorial } from '../types';

export const benfordTutorial: Tutorial = {
  id: 'benford',
  title: '【実践】ベンフォードの法則',
  description: '自然界のデータで先頭の数字が1になりやすい理由を対数で説明する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '先頭の数字は1が多い',
      content:
        '人口、株価、川の長さなど、自然界のデータでは先頭の数字が1である確率は約30%。均等なら11%のはず。この偏りを対数が説明します。',
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
        '様々なデータセットの先頭数字の分布を確認してください。ベンフォードの法則 P(d) = log₁₀(1 + 1/d) と比較してみましょう。',
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
      title: 'ベンフォードの公式',
      content:
        '先頭が d である確率: P(d) = log₁₀(1 + 1/d)\n\nP(1) = log₁₀(2) ≈ 30.1%\nP(2) = log₁₀(3/2) ≈ 17.6%\nP(9) = log₁₀(10/9) ≈ 4.6%\n\n先頭が1の確率は9の約6.5倍です。',
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
      title: 'なぜ対数で説明できるのか',
      content:
        '対数スケールで見ると、1から2までの区間は log(2)-log(1) = 0.301 の幅。8から9は log(9)-log(8) = 0.051 の幅。対数スケールで1の区間が最も広いから、1で始まるデータが最も多くなります。',
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
        'ベンフォードの法則によると、先頭が5である確率は約何%？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'P(5) = log₁₀(6/5) は約何%？',
        options: [
          { id: 'a', label: '約5%', correct: false },
          { id: 'b', label: '約8%', correct: true },
          { id: 'c', label: '約11%', correct: false },
          { id: 'd', label: '約15%', correct: false },
        ],
        explanation:
          'P(5) = log₁₀(1.2) ≈ 0.079 = 7.9%。均等な11%より少なく、対数スケールの効果が見えます。',
      },
    },
    {
      id: 'alternate',
      title: '不正会計の検出',
      content:
        'ベンフォードの法則は不正会計の検出に使われます。\n\n本物の会計データはベンフォードの法則に従いますが、人間が作った偽の数字は先頭数字が均等に分布しがち。法則からの逸脱が不正のシグナルになります。',
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
        'ベンフォードの法則は対数スケールの等間隔性から自然に導かれます。先頭が1の確率は約30%。不正検出にも応用される美しい法則です。\n\nデータセットを変えてこの法則を確認してみてください。',
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
