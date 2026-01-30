import { Tutorial } from '../types';

export const integralMvtTutorial: Tutorial = {
  id: 'integral-mvt',
  title: '平均値の定理（積分版）',
  description: '積分の平均値定理 ── 関数の「平均の高さ」を求める',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: '平均の高さ',
      content:
        '曲線の下の面積を長方形で「ちょうど同じ面積」にできるでしょうか？\n\nその長方形の高さが、関数の「平均値」です。\n\nアニメーションで曲線と同面積の長方形を見てみましょう。',
      customScene: 'integral-mvt-animation',
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
        '関数の形を変えてみてください。\n\nどんな形でも、同面積の長方形（平均の高さ）が存在します。\n\n平均の高さは、関数のどの辺りの値に近いですか？',
      customScene: 'integral-mvt-interactive',
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
      title: '積分の平均値定理',
      content:
        'f が [a, b] で連続なら、ある c ∈ [a, b] が存在して：\n\n∫ₐᵇ f(x) dx = f(c) · (b - a)\n\nつまり「面積 = 高さ f(c) × 幅 (b-a)」となる点 c が必ずある。\n\n関数の「平均値」は fₐᵥₑ = (1/(b-a)) · ∫ₐᵇ f(x) dx で定義されます。',
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
        'f(x) = x² の [0, 3] での平均値を求めます。\n\nfₐᵥₑ = (1/3) · ∫₀³ x² dx = (1/3) · [x³/3]₀³ = (1/3) · 9 = 3\n\n平均値 3 は、x² が 0 から 9 まで変化する中間あたりの値です。\n\nf(c) = 3 となる c は c = √3 ≈ 1.73。\n確かに c ∈ [0, 3] に存在しますね。',
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
        'f(x) = sin x の [0, π] での平均値はいくつでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'sin x の [0, π] での平均値は？',
        options: [
          { id: 'a', label: '1/2', correct: false },
          { id: 'b', label: '2/π', correct: true },
          { id: 'c', label: 'π/4', correct: false },
          { id: 'd', label: '1', correct: false },
        ],
        explanation:
          '正解は 2/π ≈ 0.637 です。\n\nfₐᵥₑ = (1/π) · ∫₀π sin x dx = (1/π) · [-cos x]₀π = (1/π) · 2 = 2/π',
      },
    },
    {
      id: 'alternate',
      title: '物理的な意味',
      content:
        '速度の平均値は「平均速度」そのものです。\n\nvₐᵥₑ = (1/(t₂-t₁)) · ∫ₜ₁ᵗ² v(t) dt = 総距離 / 総時間\n\n温度の平均値は「平均気温」。\n\n確率密度関数の平均値は「期待値」。\n\n積分の平均値は、日常の「平均」の一般化なのです。',
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
        '積分の平均値定理：連続関数には必ず「平均の高さ」f(c) が存在します。\n\nfₐᵥₑ = (1/(b-a)) · ∫ₐᵇ f(x) dx\n\nこれは日常の「平均」を連続関数に拡張した概念です。\n\nグラフを操作して、平均値の長方形を確かめてみてください。',
      customScene: 'integral-mvt-summary',
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
