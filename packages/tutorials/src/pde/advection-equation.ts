import { Tutorial } from '../types';

export const advectionEquationTutorial: Tutorial = {
  id: 'advection-equation',
  title: '移流方程式',
  description: '物質が流れに沿って運ばれる移流現象のPDEを学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '形を保って流れる',
      content:
        '∂u/∂t + c·∂u/∂x = 0。これは最も単純な移流方程式です。初期分布が形を変えずに速度cで移動します。アニメーションで確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'advection-equation-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：流速を変える',
      content:
        '流速cを変えて、波形の移動速度がどう変わるか試してください。負の値にすると逆方向に流れます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'advection-equation-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '特性曲線法',
      content:
        '移流方程式の解は u(x,t) = f(x - ct)。直線 x - ct = const（特性曲線）に沿って u は一定です。初期条件 f(x) が速度cで平行移動するだけです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '熱方程式との違い',
      content:
        '移流方程式では波形が拡散しません。形を保ったまま移動します。一方、熱方程式では拡散により波形が広がります。∂u/∂t + c·∂u/∂x = α·∂²u/∂x²（移流拡散方程式）は両方の効果を持ちます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：移流方程式',
      content: '移流方程式 ∂u/∂t + c·∂u/∂x = 0 の解の特徴はどれですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '移流方程式の解はどのような挙動を示しますか？',
        options: [
          { id: 'a', label: '初期分布が拡散して広がる', correct: false },
          { id: 'b', label: '初期分布が形を保って速度cで移動する', correct: true },
          { id: 'c', label: '初期分布が振動する', correct: false },
          { id: 'd', label: '初期分布が指数的に増大する', correct: false },
        ],
        explanation:
          '解は u(x,t) = f(x-ct) なので、初期分布 f がそのまま速度cで移動します。拡散も振動もしません。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：気象の移流',
      content:
        '大気中の汚染物質やが風に運ばれる現象は移流方程式で近似できます。実際の気象では拡散や乱流効果も加わりますが、基本は移流です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：移流を体感する',
      content:
        '流速と初期波形を変えて、移流の基本を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'advection-equation-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'velocity', min: -3, max: 3, step: 0.1, initial: 1 },
          { name: 'time', min: 0, max: 10, step: 0.05, initial: 0 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
