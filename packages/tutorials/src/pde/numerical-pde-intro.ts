import { Tutorial } from '../types';

export const numericalPdeIntroTutorial: Tutorial = {
  id: 'numerical-pde-intro',
  title: '数値解法入門',
  description: 'PDEの数値解法の基本的な考え方を学ぶ',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: 'コンピュータでPDEを解く',
      content:
        '多くのPDEは解析的に解けません。空間と時間を離散化し、差分で近似することで数値的に解を求めます。格子上の値が時間発展する様子をアニメーションで見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'numerical-pde-intro-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：格子の粗さを変える',
      content:
        '格子点の数を変えて、解の精度がどう変わるか観察してください。細かい格子ほど精密ですが、計算量も増えます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'numerical-pde-intro-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '離散化の基本',
      content:
        '空間を幅Δxで、時間を幅Δtで区切ります。連続関数 u(x,t) を格子点上の値 u(iΔx, nΔt) = uᵢⁿ で近似します。微分を差分で置き換えることが数値解法の出発点です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '陽解法と陰解法',
      content:
        '陽解法：次の時刻の値を現在の値から直接計算。簡単だが安定性条件あり。陰解法：次の時刻の値が連立方程式で決まる。安定だが計算量が多い。クランク・ニコルソン法は両者の平均です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：数値解法',
      content: '格子を細かくすると何が起こりますか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '格子間隔Δxを半分にすると、一般に何が起こりますか？',
        options: [
          { id: 'a', label: '解の精度が下がる', correct: false },
          { id: 'b', label: '解の精度が上がるが計算量も増える', correct: true },
          { id: 'c', label: '計算量は変わらない', correct: false },
          { id: 'd', label: '常に不安定になる', correct: false },
        ],
        explanation:
          '格子を細かくすると離散化誤差が減り精度が向上しますが、格子点の数が増えるため計算量も増大します。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：シミュレーションの歴史',
      content:
        'ノイマンやリヒトマイヤーが核兵器開発で数値PDE解法を発展させたのが始まりです。現在は天気予報、航空機設計、半導体シミュレーションなど、あらゆる分野で使われています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：数値解法の基本を体感する',
      content:
        '格子数と時間刻みを変えて、数値解の精度と安定性の関係を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'numerical-pde-intro-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'gridPoints', min: 5, max: 100, step: 1, initial: 20 },
          { name: 'timeStep', min: 0.001, max: 0.1, step: 0.001, initial: 0.01 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
