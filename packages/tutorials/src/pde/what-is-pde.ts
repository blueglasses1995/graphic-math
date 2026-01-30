import { Tutorial } from '../types';

export const whatIsPdeTutorial: Tutorial = {
  id: 'what-is-pde',
  title: 'PDEとは',
  description: '偏微分方程式の基本概念を学び、ODEとの違いを理解する',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '多変数の変化を記述する方程式',
      content:
        '温度は場所と時刻の両方に依存します。偏微分方程式（PDE）は、複数の変数に対する偏微分を含む方程式です。アニメーションで熱が広がる様子を見てみましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'pde-intro-heat-spread',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：熱源を置く',
      content:
        '画面上をタッチして熱源を置いてください。熱がどのように広がるか観察しましょう。場所と時間、2つの変数が関わっています。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'pde-intro-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'ODEとPDEの違い',
      content:
        'ODE（常微分方程式）は1変数の関数 y(t) を扱います。一方、PDE（偏微分方程式）は u(x,t) のように複数変数の関数を扱います。dy/dt = ky はODE、∂u/∂t = k·∂²u/∂x² はPDEです。',
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
      title: 'PDEの分類',
      content:
        'PDEには大きく3つの型があります。楕円型（ラプラス方程式）、放物型（熱方程式）、双曲型（波動方程式）。それぞれ定常状態、拡散、波の伝播を記述します。',
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
      title: 'クイズ：PDEの特徴',
      content: '次のうち、偏微分方程式（PDE）の特徴として正しいものはどれですか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '偏微分方程式（PDE）の特徴として正しいものはどれですか？',
        options: [
          { id: 'a', label: '1つの独立変数のみを含む', correct: false },
          { id: 'b', label: '複数の独立変数に関する偏微分を含む', correct: true },
          { id: 'c', label: '常に解析的に解ける', correct: false },
          { id: 'd', label: '線形方程式のみを指す', correct: false },
        ],
        explanation:
          'PDEは複数の独立変数（例：位置xと時刻t）に関する偏微分を含む方程式です。ODEは1変数のみです。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：自然現象とPDE',
      content:
        '水面の波紋、金属の冷却、電場の分布…自然界の多くの現象はPDEで記述されます。空間と時間の両方で変化する量を扱うとき、PDEが不可欠になります。',
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
      title: 'まとめ：PDEを体感する',
      content:
        'PDEは複数変数の関数に対する偏微分を含む方程式です。スライダーで空間と時間の変化を同時に操作し、PDEの世界を体感しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'pde-intro-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'time', min: 0, max: 10, step: 0.1, initial: 0 },
          { name: 'position', min: -5, max: 5, step: 0.1, initial: 0 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
