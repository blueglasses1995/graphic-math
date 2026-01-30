import { Tutorial } from '../types';

export const maximumPrincipleTutorial: Tutorial = {
  id: 'maximum-principle',
  title: '最大値原理',
  description: '熱方程式とラプラス方程式における最大値原理を理解する',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '最大値は境界にある',
      content:
        '調和関数や熱方程式の解は、領域の内部で最大値を持ちません。最大値は必ず境界（または初期時刻）に現れます。この驚くべき性質をアニメーションで確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'maximum-principle-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：内部の値を確認',
      content:
        '領域内の点をタッチして値を確認してください。境界値より大きな値が内部に現れないことを実感しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'maximum-principle-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '調和関数の最大値原理',
      content:
        '∇²u = 0 の解（調和関数）が有界閉領域で最大値を持つなら、それは境界上にあります。内部で極大値をとると ∂²u/∂x² ≤ 0 かつ ∂²u/∂y² ≤ 0 で、∇²u ≤ 0 となり矛盾します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '熱方程式の最大値原理',
      content:
        '∂u/∂t = α·∂²u/∂x² の解の最大値は、初期時刻 t=0 または空間の境界 x=0, x=L に現れます。温度は「熱源がない限り、初期値や境界値より高くならない」のです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：最大値原理',
      content: '最大値原理から導かれる重要な結論は何ですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '最大値原理から直接導かれる結論はどれですか？',
        options: [
          { id: 'a', label: 'PDEの解は常に正である', correct: false },
          { id: 'b', label: 'ラプラス方程式の解の一意性', correct: true },
          { id: 'c', label: 'PDEには必ず解が存在する', correct: false },
          { id: 'd', label: '波動方程式のエネルギー保存', correct: false },
        ],
        explanation:
          '最大値原理から、同じ境界条件を持つ2つの解の差は最大値0＝最小値0となり、差は恒等的に0。したがって解は一意です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：平均値の性質',
      content:
        '調和関数では、ある点の値はその周囲の円上の平均値に等しいです。平均値が値そのものに等しいなら、内部で極端な値をとることは不可能です。これが最大値原理の直感的な説明です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：最大値原理を確認する',
      content:
        '境界値を自由に変えて、内部の値が常に境界値の範囲に収まることを確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'maximum-principle-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'boundaryMax', min: 0, max: 100, step: 1, initial: 100 },
          { name: 'boundaryMin', min: 0, max: 100, step: 1, initial: 0 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
