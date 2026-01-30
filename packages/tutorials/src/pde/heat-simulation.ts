import { Tutorial } from '../types';

export const heatSimulationTutorial: Tutorial = {
  id: 'heat-simulation',
  title: '熱伝導のシミュレーション',
  description: '熱伝導方程式の数値シミュレーションを実践する',
  category: 'pde',
  steps: [
    {
      id: 'hook',
      title: 'コンピュータで熱を再現する',
      content:
        '有限差分法で熱方程式を数値的に解き、温度分布の時間変化を再現します。リアルタイムシミュレーションのアニメーションを見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'heat-simulation-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう：熱源を追加',
      content:
        '画面をタッチして熱源や冷却源を追加してください。リアルタイムで温度が変化します。材料の熱伝導率も変えられます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'heat-simulation-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: 'FTCSスキームの実装',
      content:
        'uᵢⁿ⁺¹ = uᵢⁿ + r(uᵢ₊₁ⁿ - 2uᵢⁿ + uᵢ₋₁ⁿ)。r = αΔt/Δx²。各格子点の次の値は現在の値と両隣の値から計算します。r ≤ 0.5 で安定です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '2次元シミュレーション',
      content:
        '2次元では uᵢⱼⁿ⁺¹ = uᵢⱼⁿ + r(uᵢ₊₁ⱼⁿ + uᵢ₋₁ⱼⁿ + uᵢⱼ₊₁ⁿ + uᵢⱼ₋₁ⁿ - 4uᵢⱼⁿ)。上下左右の4つの隣接点からの寄与を合算します。安定性条件は r ≤ 1/4 に厳しくなります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: 'クイズ：熱伝導シミュレーション',
      content: '2次元FTCSスキームの安定性条件はどれですか？',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '2次元のFTCSスキームの安定性条件 r = αΔt/Δx² は？',
        options: [
          { id: 'a', label: 'r ≤ 1', correct: false },
          { id: 'b', label: 'r ≤ 1/2', correct: false },
          { id: 'c', label: 'r ≤ 1/4', correct: true },
          { id: 'd', label: 'r ≤ 1/8', correct: false },
        ],
        explanation:
          '2次元では4方向からの寄与があるため、安定性条件は r ≤ 1/(2d) = 1/4（d=2次元）に厳しくなります。',
      },
    },
    {
      id: 'alternate',
      title: '別の見方：工学的な熱設計',
      content:
        'CPUのヒートシンク設計、建物の断熱性能評価、溶接の温度管理など、熱伝導シミュレーションは製造業で不可欠なツールです。実用的にはCAEソフトで3次元FEMが使われます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：シミュレーションを体感する',
      content:
        '熱伝導率と格子点数を変えて、シミュレーションの精度と速度を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'heat-simulation-summary',
      interactiveConfig: {
        type: 'parameter-sliders',
        parameters: [
          { name: 'conductivity', min: 0.01, max: 2, step: 0.01, initial: 0.5 },
          { name: 'gridSize', min: 10, max: 100, step: 1, initial: 30 },
        ],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
