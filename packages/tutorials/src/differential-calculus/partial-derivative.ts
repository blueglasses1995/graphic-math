import { Tutorial } from '../types';

export const partialDerivativeTutorial: Tutorial = {
  id: 'partial-derivative',
  title: '【実践】偏微分の入口',
  description: '複数変数の関数を1つの変数だけで微分する「偏微分」の考え方を学ぶ',
  category: 'differential-calculus',
  steps: [
    {
      id: 'hook',
      title: '2つの変数を持つ関数',
      content:
        'f(x,y) = x² + y² は曲面（お椀型）を描きます。x 方向の傾きと y 方向の傾きは別々に求められます。「他の変数を固定して1つだけ微分する」のが偏微分です。',
      customScene: 'partial-derivative-animation',
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
        '曲面上の点を動かして、x方向の傾きと y方向の傾きを別々に確認してください。同じ点でも方向によって傾きが異なります。',
      customScene: 'partial-derivative-interactive',
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
      title: '偏微分の記法',
      content:
        '∂f/∂x は「y を定数とみなして x で微分」。∂f/∂y は「x を定数とみなして y で微分」。丸い ∂ は偏微分を表す記号です。f(x,y) = x²y なら ∂f/∂x = 2xy、∂f/∂y = x²。',
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
      title: '具体例：温度分布',
      content:
        '金属板の温度 T(x,y) = 100 − x² − 2y²。∂T/∂x = −2x（x方向の温度変化率）、∂T/∂y = −4y（y方向の温度変化率）。原点が最も熱く、離れるほど冷えていきます。',
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
        'f(x,y) = 3x²y + y³ の ∂f/∂x は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'f(x,y) = 3x²y + y³ の ∂f/∂x は？',
        options: [
          { id: 'a', label: '6xy', correct: true },
          { id: 'b', label: '3x² + 3y²', correct: false },
          { id: 'c', label: '6xy + 3y²', correct: false },
          { id: 'd', label: '6x', correct: false },
        ],
        explanation:
          'y を定数とみなして x で微分。3x²y → 6xy（パワールール）、y³ → 0（y は定数）。∂f/∂x = 6xy。',
      },
    },
    {
      id: 'alternate',
      title: '別の視点：等高線と傾き',
      content:
        '等高線（同じ高さの曲線）を描くと地形図のようになります。∂f/∂x は「東に進んだときの上り具合」、∂f/∂y は「北に進んだときの上り具合」。等高線が密なほど傾斜が急です。',
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
        '偏微分: 他の変数を固定して1変数で微分する。∂f/∂x と ∂f/∂y で方向別の変化率がわかります。\n\n次は偏微分をまとめた「勾配ベクトル」を学びましょう。',
      customScene: 'partial-derivative-summary',
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
