import { Tutorial } from '../types';

export const seismicWaveTutorial: Tutorial = {
  id: 'seismic-wave',
  title: '地震波の伝播',
  description: '地震波の伝播を波動方程式で理解する',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: '地球内部を伝わる波',
      content:
        '地震は震源から波として伝わります。P波（縦波）とS波（横波）は異なる速度で伝播し、波動方程式で記述されます。地震波の伝播アニメーションを見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'seismic-wave-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：震源の位置と深さ',
      content:
        '震源の位置をタッチで設定し、P波とS波が異なる速度で広がる様子を観察してください。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'seismic-wave-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'P波とS波',
      content:
        'P波（Primary）は疎密波で速度 vₚ = √((K+4G/3)/ρ)。S波（Secondary）は横波で速度 vₛ = √(G/ρ)。vₚ > vₛ のためP波が先に到着します。到着時間差から震源距離を求められます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '弾性波動方程式',
      content:
        'ρ·∂²u/∂t² = (λ+μ)∇(∇·u) + μ∇²u。これが弾性体中の波動方程式です。λとμはラメ定数で、媒質の弾性的性質を表します。不均質な地球内部では速度が位置に依存し、波が屈折します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：地震波',
      content: 'P波がS波より先に観測される理由は何ですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'P波がS波よりも先に地震計に到着する理由はどれですか？',
        options: [
          { id: 'a', label: 'P波の方が振幅が大きいため', correct: false },
          { id: 'b', label: 'P波の方が伝播速度が速いため', correct: true },
          { id: 'c', label: 'P波の方が周波数が高いため', correct: false },
          { id: 'd', label: 'S波は地表を伝わるため遅い', correct: false },
        ],
        explanation:
          'P波は縦波で vₚ = √((K+4G/3)/ρ)、S波は横波で vₛ = √(G/ρ)。体積弾性率Kが正のため常に vₚ > vₛ となり、P波が先に到着します。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：地球内部の構造探査',
      content:
        '地震波の反射・屈折パターンから地球内部の構造がわかります。液体の外核ではS波が伝わらず、これが外核が液体であることの証拠になりました。PDEの解が地球科学を革新したのです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：地震波を体感する',
      content:
        '波速と震源深さを変えて、地震波の到着パターンを観察しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'seismic-wave-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'pWaveSpeed', min: 3, max: 8, step: 0.1, initial: 6 },
          { name: 'sWaveSpeed', min: 1, max: 5, step: 0.1, initial: 3.5 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
