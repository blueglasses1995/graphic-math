import { Tutorial } from '../types';

export const baseComparisonTutorial: Tutorial = {
  id: 'base-comparison',
  title: '底の違い',
  description: '底が変わると指数関数のグラフがどう変わるかを比較する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '底が変わると何が変わる？',
      content:
        '2ˣ、3ˣ、10ˣ のグラフを同時に描いてみます。底が大きいほどグラフは急激に立ち上がります。その違いをアニメーションで見てみましょう。',
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
      title: '底を自由に変えてみよう',
      content:
        'スライダーで底の値を0.1から10まで変えてみましょう。底が1より大きいとき、1のとき、1より小さいときで、グラフの形がまったく異なることに注目してください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '底 > 1：増加関数',
      content:
        '底が1より大きいとき（例：2ˣ、3ˣ）、xが増えるほど値が急激に増加します。\n\n2ˣ: ...1/4, 1/2, 1, 2, 4, 8, 16...\n3ˣ: ...1/9, 1/3, 1, 3, 9, 27, 81...\n\n底が大きいほど増加のスピードが速くなります。',
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
      title: '0 < 底 < 1：減少関数',
      content:
        '底が0と1の間のとき（例：(1/2)ˣ、0.9ˣ）、xが増えるほど値は0に近づきます。\n\n(1/2)ˣ: ...4, 2, 1, 1/2, 1/4, 1/8...\n\nこれは2ˣのグラフを左右反転したものと同じです。(1/2)ˣ = 2⁻ˣ だからです。',
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
      content: '底が1のとき、1ˣのグラフはどんな形になるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '1ˣのグラフはどんな形？',
        options: [
          { id: 'a', label: '右上がりの曲線', correct: false },
          { id: 'b', label: 'y=1の水平線', correct: true },
          { id: 'c', label: '右下がりの曲線', correct: false },
          { id: 'd', label: '原点を通る直線', correct: false },
        ],
        explanation:
          '1を何回掛けても1です。1ˣ = 1（すべてのxに対して）。したがってy=1の水平な直線になります。',
      },
    },
    {
      id: 'alternate',
      title: '共通点を見つけよう',
      content:
        'どんな底でも（底>0、底≠1）、指数関数には共通点があります：\n• x=0のとき、必ずy=1を通る（a⁰=1）\n• y>0（グラフはx軸より上）\n• x軸は漸近線（グラフは決してx軸に触れない）\n\nこの3つの性質は指数関数の「指紋」のようなものです。',
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
        '底の違いによる指数関数の分類：\n• 底 > 1 → 増加関数（右上がり）\n• 底 = 1 → 定数関数（y=1）\n• 0 < 底 < 1 → 減少関数（右下がり）\n• 底 ≤ 0 → 定義しない\n\n共通点：(0,1)を通り、常にy>0、x軸が漸近線。',
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
