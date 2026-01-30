import { Tutorial } from '../types';

export const laplaceEquationTutorial: Tutorial = {
  id: 'laplace-equation',
  title: 'ラプラス方程式',
  description: '定常状態を記述する楕円型PDEの基本を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '平衡に達した温度分布',
      content:
        '十分時間が経つと、温度分布は変化しなくなります。この定常状態は ∂²u/∂x² + ∂²u/∂y² = 0（ラプラス方程式）で記述されます。等温線のアニメーションを見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'laplace-equation-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：境界温度を設定',
      content:
        '領域の境界上の温度をドラッグで設定してください。内部の温度分布がラプラス方程式に従って自動的に決まります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'laplace-equation-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ラプラシアン ∇²u = 0',
      content:
        'ラプラス方程式 ∇²u = Δu = ∂²u/∂x² + ∂²u/∂y² = 0。この解を調和関数と呼びます。調和関数は「各点の値がその周囲の平均に等しい」という平均値の性質を持ちます。',
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
      title: '調和関数の例',
      content:
        'u(x,y) = x² - y² はラプラス方程式を満たします。∂²u/∂x² = 2、∂²u/∂y² = -2 なので、和は0です。また u = ln(x²+y²) も原点を除いてラプラス方程式を満たします。',
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
      title: 'クイズ：ラプラス方程式',
      content: '調和関数の性質として正しいものはどれですか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '調和関数（ラプラス方程式の解）の性質として正しいものはどれですか？',
        options: [
          { id: 'a', label: '内部に極大値または極小値を持つ', correct: false },
          { id: 'b', label: '各点の値は周囲の平均値に等しい', correct: true },
          { id: 'c', label: '常に単調増加である', correct: false },
          { id: 'd', label: '境界条件に依存しない', correct: false },
        ],
        explanation:
          '調和関数は平均値の性質を持ち、内部で最大値・最小値をとりません（最大値原理）。値は境界条件で完全に決まります。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：石鹸膜の形',
      content:
        '針金の枠に石鹸液をつけると、膜はラプラス方程式の解に近い形になります。これは膜が面積を最小にしようとするためです。静電場のポテンシャルもラプラス方程式に従います。',
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
      title: 'まとめ：ラプラス方程式を体感する',
      content:
        '境界値を変えて、内部の温度分布がどのように決まるか確認しましょう。平均値の性質を直感的に理解できます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'laplace-equation-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'boundaryTop', min: 0, max: 100, step: 1, initial: 100 },
          { name: 'boundaryBottom', min: 0, max: 100, step: 1, initial: 0 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
