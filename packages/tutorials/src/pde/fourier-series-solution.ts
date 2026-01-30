import { Tutorial } from '../types';

export const fourierSeriesSolutionTutorial: Tutorial = {
  id: 'fourier-series-solution',
  title: 'フーリエ級数解',
  description: 'フーリエ級数を用いたPDEの解法を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '初期条件をsinで分解する',
      content:
        '任意の初期温度分布を sin の重ね合わせで表現できます。各成分が独立に時間発展するため、全体の解が求まります。フーリエ分解のアニメーションを見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'fourier-series-solution-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：フーリエ係数を調整',
      content:
        '各フーリエ成分の係数を変えて、初期条件の形がどう変わるか試してください。項数が増えるほど精密に表現できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'fourier-series-solution-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'フーリエ係数の計算',
      content:
        '初期条件 u(x,0) = f(x) に対し、bₙ = (2/L)∫₀ᴸ f(x)sin(nπx/L)dx。これが各モードの振幅を決めます。矩形波の場合、bₙ = 4/(nπ)（n奇数）、0（n偶数）です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '時間発展と収束',
      content:
        'u(x,t) = Σ bₙ·sin(nπx/L)·e^{-α(nπ/L)²t}。高い周波数ほど指数関数的に速く減衰します。時間が十分経つと第1モードだけが残り、滑らかな分布になります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：フーリエ級数解',
      content: '熱方程式のフーリエ級数解において、最も速く減衰するのはどのモードですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '熱方程式のフーリエ級数解で、最も速く減衰するモードはどれですか？',
        options: [
          { id: 'a', label: 'n=1（最低次モード）', correct: false },
          { id: 'b', label: 'すべて同じ速さで減衰する', correct: false },
          { id: 'c', label: '最も高い周波数のモード', correct: true },
          { id: 'd', label: '減衰は起こらない', correct: false },
        ],
        explanation:
          '減衰率は e^{-α(nπ/L)²t} なので、nが大きい（高周波数）モードほど速く減衰します。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：周波数空間での解法',
      content:
        'フーリエ変換を用いると、偏微分が掛け算に変わります。空間微分 ∂²/∂x² はフーリエ空間で -k² の掛け算になり、PDEが各周波数ごとのODEになります。これが「スペクトル法」の基本です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：フーリエ級数解を体感する',
      content:
        'フーリエ項数と時間を変えて、解の近似精度と時間発展を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'fourier-series-solution-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'terms', min: 1, max: 20, step: 1, initial: 5 },
          { name: 'time', min: 0, max: 5, step: 0.05, initial: 0 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
