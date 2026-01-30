import { Tutorial } from '../types';

export const lnDerivativeTutorial: Tutorial = {
  id: 'ln-derivative',
  title: 'ln(x)の微分',
  description: 'd/dx ln(x) = 1/x であることを視覚的に理解する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '接線の傾きが 1/x',
      content:
        'y = ln(x) のグラフ上の点 x における接線の傾きは 1/x。x = 1 で傾き1、x = 2 で傾き0.5、x = 10 で傾き0.1。x が大きくなるほど傾きが緩やかになります。',
      customScene: 'ln-derivative-animation',
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
        '点を動かして、各位置での接線の傾きが 1/x と一致することを確認してください。',
      customScene: 'ln-derivative-interactive',
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
      title: '微分の導出',
      content:
        'ln(x) の微分を定義から導きます。\n\nlim(h→0) [ln(x+h) - ln(x)] / h\n= lim(h→0) ln((x+h)/x) / h\n= lim(h→0) ln(1 + h/x) / h\n= 1/x',
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
      title: '合成関数の微分',
      content:
        'd/dx ln(f(x)) = f\'(x) / f(x)。連鎖律を適用した結果です。\n\n例: d/dx ln(x²) = 2x / x² = 2/x\n確認: ln(x²) = 2ln(x) なので d/dx = 2/x ✓',
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
        'x = 4 における ln(x) の接線の傾きは？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'x = 4 での ln(x) の微分値は？',
        options: [
          { id: 'a', label: '4', correct: false },
          { id: 'b', label: '0.25', correct: true },
          { id: 'c', label: '0.5', correct: false },
          { id: 'd', label: 'ln(4)', correct: false },
        ],
        explanation:
          'd/dx ln(x) = 1/x なので x = 4 のとき 1/4 = 0.25 です。',
      },
    },
    {
      id: 'alternate',
      title: '対数微分法',
      content:
        '複雑な関数の微分に ln を活用できます。\n\ny = x^x を微分するには:\nln(y) = x × ln(x)\n両辺を微分: y\'/y = ln(x) + 1\ny\' = x^x (ln(x) + 1)\n\nこの「対数微分法」は積や累乗が複雑な関数で威力を発揮します。',
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
        'd/dx ln(x) = 1/x。これが自然対数が「自然」と呼ばれる理由の一つ。シンプルで美しい導関数です。\n\n接線を動かして傾きの変化を体感してください。',
      customScene: 'ln-derivative-summary',
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
