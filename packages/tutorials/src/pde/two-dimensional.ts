import { Tutorial } from '../types';

export const twoDimensionalTutorial: Tutorial = {
  id: 'two-dimensional',
  title: '2次元への拡張',
  description: '1次元PDEを2次元に拡張する方法を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '平面に広がる熱',
      content:
        '1次元の棒ではなく、2次元の板の上の熱伝導を考えます。∂u/∂t = α(∂²u/∂x² + ∂²u/∂y²)。平面上で熱が広がるアニメーションを見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [3, 3, 3] },
      customScene: 'two-dimensional-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：2次元の熱源',
      content:
        '板の上をタッチして熱源を置いてください。2次元的に熱が広がっていく様子を観察しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [3, 3, 3] },
      customScene: 'two-dimensional-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ラプラシアンの2次元版',
      content:
        '2次元のラプラシアンは ∇²u = ∂²u/∂x² + ∂²u/∂y²。極座標では ∇²u = ∂²u/∂r² + (1/r)∂u/∂r + (1/r²)∂²u/∂θ²。対称性に応じた座標系の選択が重要です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [3, 3, 3] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '矩形領域の変数分離',
      content:
        '矩形領域 [0,a]×[0,b] でラプラス方程式を解く場合、u(x,y) = X(x)Y(y) と分離します。X" + μX = 0、Y" - μY = 0。2方向に変数分離でき、二重級数で解が表されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [3, 3, 3] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：2次元PDE',
      content: '2次元熱方程式のラプラシアンはどれですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '2次元直交座標系でのラプラシアン ∇²u はどれですか？',
        options: [
          { id: 'a', label: '∂u/∂x + ∂u/∂y', correct: false },
          { id: 'b', label: '∂²u/∂x² + ∂²u/∂y²', correct: true },
          { id: 'c', label: '∂²u/∂x∂y', correct: false },
          { id: 'd', label: '(∂u/∂x)² + (∂u/∂y)²', correct: false },
        ],
        explanation:
          'ラプラシアンは各座標方向の2階偏微分の和です。∇²u = ∂²u/∂x² + ∂²u/∂y²。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：膜の振動',
      content:
        '太鼓の膜の振動は2次元波動方程式で記述されます。円形膜の場合、ベッセル関数が固有関数になり、美しい振動パターン（クラドニ図形）が現れます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [3, 3, 3] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：2次元の世界を体感する',
      content:
        '2次元の熱伝導パラメータを変えて、温度分布の時間変化を観察しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [3, 3, 3] },
      customScene: 'two-dimensional-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'alpha', min: 0.01, max: 2, step: 0.01, initial: 0.5 },
          { name: 'time', min: 0, max: 5, step: 0.05, initial: 0 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
