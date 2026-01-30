import { Tutorial } from '../types';

export const boundaryConditionsTutorial: Tutorial = {
  id: 'boundary-conditions',
  title: '境界条件の種類',
  description: 'ディリクレ、ノイマン、ロビン境界条件の違いと役割を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '境界が解を決める',
      content:
        'PDEの解は方程式だけでは決まりません。境界でどのような条件を課すかで、全く異なる解が得られます。3種類の境界条件による解の違いをアニメーションで見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'boundary-conditions-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：境界条件を切り替え',
      content:
        '境界条件の種類を切り替えて、熱方程式の解がどう変わるか観察してください。端を固定温度にするか、断熱にするか、熱流出を許すかで挙動が異なります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'boundary-conditions-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ディリクレ境界条件',
      content:
        'u(0,t) = a, u(L,t) = b のように、境界上の関数値を指定します。物理的には「端の温度を固定する」ことに対応します。最も基本的な境界条件です。',
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
      title: 'ノイマン・ロビン境界条件',
      content:
        'ノイマン条件：∂u/∂x|₍境界₎ = g。法線方向の微分（流束）を指定します。断熱壁は ∂u/∂n = 0 です。ロビン条件：αu + β·∂u/∂n = g。値と微分の線形結合を指定します。熱の放散を表します。',
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
      title: 'クイズ：境界条件',
      content: '断熱壁を表す境界条件はどれですか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '棒の端が完全に断熱されている場合、どの境界条件が適切ですか？',
        options: [
          { id: 'a', label: 'u = 0（ディリクレ）', correct: false },
          { id: 'b', label: '∂u/∂n = 0（ノイマン）', correct: true },
          { id: 'c', label: 'u + ∂u/∂n = 0（ロビン）', correct: false },
          { id: 'd', label: '∂²u/∂x² = 0', correct: false },
        ],
        explanation:
          '断熱壁では熱の出入りがないため、法線方向の温度勾配（熱流束）が0になります。これはノイマン境界条件 ∂u/∂n = 0 です。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：初期条件と境界条件',
      content:
        '放物型PDE（熱方程式）には初期条件と境界条件の両方が必要です。楕円型PDE（ラプラス方程式）には境界条件だけで十分です。双曲型PDE（波動方程式）には初期変位と初期速度の2つの初期条件が必要です。',
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
      title: 'まとめ：境界条件を体感する',
      content:
        '境界の値や勾配をスライダーで変えて、解がどのように応答するか確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'boundary-conditions-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'leftBoundary', min: 0, max: 100, step: 1, initial: 100 },
          { name: 'rightBoundary', min: 0, max: 100, step: 1, initial: 0 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
