import { Tutorial } from '../types';

export const partialDerivativeReviewTutorial: Tutorial = {
  id: 'partial-derivative-review',
  title: '偏微分の復習',
  description: '偏微分の基本を復習し、PDEを学ぶための土台を固める',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '山の傾きを2方向で測る',
      content:
        '山の斜面に立ったとき、東西方向と南北方向で傾きは異なります。偏微分は、一方の変数を固定してもう一方だけの変化率を求める操作です。3D曲面のアニメーションで確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [3, 3, 3],
      },
      customScene: 'partial-derivative-surface',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：偏微分の方向',
      content:
        '曲面上の点をドラッグして、x方向とy方向の偏微分（傾き）がどう変わるか観察してください。矢印の長さが傾きの大きさを表します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [3, 3, 3],
      },
      customScene: 'partial-derivative-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '∂f/∂x の計算',
      content:
        'f(x,y) = x²y + 3y の場合、yを定数とみなしてxで微分します。∂f/∂x = 2xy。yの項は定数として消えます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '2階偏微分',
      content:
        'f(x,y) = x²y + 3y に対し、∂²f/∂x² = 2y です。また混合偏微分 ∂²f/∂x∂y = 2x です。滑らかな関数では ∂²f/∂x∂y = ∂²f/∂y∂x が成り立ちます（シュワルツの定理）。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：偏微分の計算',
      content: 'f(x,y) = x³ + 2xy² のとき、∂f/∂y はどれですか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'f(x,y) = x³ + 2xy² のとき、∂f/∂y はどれですか？',
        options: [
          { id: 'a', label: '3x² + 2y²', correct: false },
          { id: 'b', label: '4xy', correct: true },
          { id: 'c', label: '2xy', correct: false },
          { id: 'd', label: 'x³ + 4xy', correct: false },
        ],
        explanation:
          'xを定数とみなしてyで微分します。x³の項はyを含まないので0。2xy²をyで微分すると4xy。よって∂f/∂y = 4xy。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：勾配ベクトル',
      content:
        '偏微分 ∂f/∂x と ∂f/∂y をまとめたベクトル (∂f/∂x, ∂f/∂y) を勾配（∇f）と呼びます。勾配は関数が最も急に増加する方向を指します。PDEではこのような微分演算子が頻繁に登場します。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [3, 3, 3],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：偏微分を使いこなす',
      content:
        '偏微分は多変数関数の各方向の変化率です。パラメータを変えて、偏微分の値がどう変わるか確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [3, 3, 3],
      },
      customScene: 'partial-derivative-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'x', min: -3, max: 3, step: 0.1, initial: 1 },
          { name: 'y', min: -3, max: 3, step: 0.1, initial: 1 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
