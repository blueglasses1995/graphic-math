import { Tutorial } from '../types';

export const centerOfMassTutorial: Tutorial = {
  id: 'center-of-mass',
  title: '【実践】重心を求める',
  description: '積分を使って連続的な物体の重心を計算する',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: 'バランスポイント',
      content:
        '指一本で板をバランスさせられる点 ── それが重心です。\n\n離散的な点なら「質量 × 位置」の平均で求められます。\n\n連続的な物体の場合は？ 積分の出番です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '触ってみよう',
      content:
        '密度分布を変えてみてください。\n\n重心の位置がどう変わるか観察しましょう。\n\n密度が偏っている側に重心が寄ります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '重心の公式',
      content:
        '線密度 ρ(x) の棒の重心：\n\nx̄ = ∫ₐᵇ x·ρ(x) dx / ∫ₐᵇ ρ(x) dx = M₁/M\n\n分子 M₁ は「モーメント」（位置 × 質量の積分）\n分母 M は「全質量」\n\n一様密度 ρ(x) = ρ₀ なら x̄ = (a+b)/2（区間の中央）。',
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
      title: '具体例',
      content:
        '密度 ρ(x) = x の棒（0 ≤ x ≤ 2）の重心：\n\nM = ∫₀² x dx = [x²/2]₀² = 2\nM₁ = ∫₀² x·x dx = ∫₀² x² dx = [x³/3]₀² = 8/3\n\nx̄ = M₁/M = (8/3)/2 = 4/3 ≈ 1.33\n\n中央（x = 1）より右側に偏っています。\n右側ほど密度が高いから当然ですね。',
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
      title: '予測してみよう',
      content:
        '密度 ρ(x) = 3x² の棒（0 ≤ x ≤ 1）の重心は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'ρ(x) = 3x²（0 ≤ x ≤ 1）の重心 x̄ は？',
        options: [
          { id: 'a', label: '1/2', correct: false },
          { id: 'b', label: '2/3', correct: false },
          { id: 'c', label: '3/4', correct: true },
          { id: 'd', label: '4/5', correct: false },
        ],
        explanation:
          '正解は 3/4 です。\n\nM = ∫₀¹ 3x² dx = 1\nM₁ = ∫₀¹ x·3x² dx = ∫₀¹ 3x³ dx = 3/4\nx̄ = (3/4)/1 = 3/4',
      },
    },
    {
      id: 'alternate',
      title: '2次元の重心',
      content:
        '薄い板の重心は x, y 両方を計算します：\n\nx̄ = (1/A) ∫∫ x dA\nȳ = (1/A) ∫∫ y dA\n\n曲線 y = f(x) の下の領域なら：\nȳ = (1/A) ∫ₐᵇ [f(x)]²/2 dx\n\n重心は構造力学、ロボティクスなどで不可欠な概念です。',
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
      title: 'まとめ',
      content:
        '重心 x̄ = ∫ x·ρ(x) dx / ∫ ρ(x) dx\n\n「位置 × 質量」の平均 ── 期待値と同じ構造です。\n\n密度分布を変えて、重心の移動を確かめてみてください。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
