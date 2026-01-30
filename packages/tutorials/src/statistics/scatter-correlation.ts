import { Tutorial } from '../types';

export const scatterCorrelationTutorial: Tutorial = {
  id: 'scatter-correlation',
  title: '散布図と相関',
  description: '2つの変数の関係を散布図で可視化し、相関係数を理解する',
  category: 'statistics',
  steps: [
    {
      id: 'hook',
      title: '2つの変数の関係',
      content:
        '身長と体重、勉強時間とテストの点数、気温とアイスの売上……\n\n2つの変数の間に関係はあるのでしょうか？\n\n散布図を描くと、その関係が目に見えるようになります。',
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
        'データ点を動かして、相関係数がどう変わるか観察しましょう。\n\n点を直線上に並べるとどうなりますか？バラバラに散らすとどうなりますか？',
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
      title: '正の相関',
      content:
        '身長が高い人ほど体重が重い傾向がある。\n\nこのように、一方が増えるともう一方も増える関係を「正の相関」と呼びます。\n\n散布図では右上がりの傾向が見えます。\n\n相関係数 r は +1 に近づきます。r = 1 なら完全に直線上に並んでいます。',
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
      title: '負の相関と無相関',
      content:
        '気温が上がると暖房費は下がる ── これは「負の相関」(r は -1 に近い)。\n\n靴のサイズとテストの点数には関係がない ── これは「無相関」(r ≈ 0)。\n\n重要: r は「直線的な関係」しか測れません。\n\nU字型やV字型の関係があっても r ≈ 0 になることがあります。散布図を見ることが大切です。',
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
        '散布図で点が完全な円を描いている場合、相関係数 r はいくつに近いでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '点が完全な円を描いているとき、相関係数 r は？',
        options: [
          { id: 'a', label: 'r = 1', correct: false },
          { id: 'b', label: 'r = -1', correct: false },
          { id: 'c', label: 'r ≈ 0', correct: true },
          { id: 'd', label: 'r = 0.5', correct: false },
        ],
        explanation:
          '正解は r ≈ 0 です。\n\n円は明らかに「関係がある」パターンですが、直線的な関係ではありません。\n\n相関係数は直線関係しか捉えられないため、非線形な関係は見逃してしまいます。\n散布図を必ず確認しましょう。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：標準化と相関',
      content:
        '相関係数 r は、両方の変数を標準化（平均0, 標準偏差1に変換）した後の共分散です。\n\n標準化すると単位が消えるため、r は -1 から +1 の範囲に収まります。\n\nこれにより、まったく異なるスケールのデータ同士でも関係の強さを比較できます。\n\n|r| > 0.7 なら強い相関、0.4〜0.7 なら中程度、< 0.4 なら弱い相関と言われます。',
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
        '散布図は2変数の関係を可視化するツールです。\n\n相関係数 r は直線関係の強さと方向を -1〜+1 で表します。\n・r > 0: 正の相関\n・r < 0: 負の相関\n・r ≈ 0: 無相関（ただし非線形な関係がある可能性あり）\n\n必ず散布図を見て、数値だけで判断しないことが重要です。\n\n次は散布図に直線を当てはめる「回帰直線」を学びます。',
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
