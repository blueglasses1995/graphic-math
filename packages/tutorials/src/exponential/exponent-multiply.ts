import { Tutorial } from '../types';

export const exponentMultiplyTutorial: Tutorial = {
  id: 'exponent-multiply',
  title: '指数法則：掛け算',
  description: '指数同士の掛け算・割り算のルールを視覚的に理解する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '指数の掛け算はなぜ足し算になる？',
      content:
        '2³ × 2⁴ を計算してみましょう。(2×2×2) × (2×2×2×2) = 2×2×2×2×2×2×2 = 2⁷。指数の3と4を足すと7。掛け算が足し算に変わる不思議をアニメーションで見てみましょう。',
      customScene: "exponent-multiply-animation",
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
      title: '指数を組み合わせてみよう',
      content:
        '2つの指数 m と n をスライダーで変えて、aᵐ × aⁿ = aᵐ⁺ⁿ が常に成り立つことを確認してみましょう。',
      customScene: "exponent-multiply-interactive",
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '掛け算の法則',
      content:
        '指数法則（掛け算）：aᵐ × aⁿ = aᵐ⁺ⁿ\n\n「m回掛ける」×「n回掛ける」=「(m+n)回掛ける」\n\n例：\n3² × 3⁴ = 3²⁺⁴ = 3⁶ = 729\n10³ × 10² = 10⁵ = 100,000\n\n重要：底が同じときだけ使えるルールです。',
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
      title: '割り算の法則',
      content:
        '指数法則（割り算）：aᵐ ÷ aⁿ = aᵐ⁻ⁿ\n\n「m回掛ける」÷「n回掛ける」=「(m-n)回掛ける」\n\n例：\n2⁵ ÷ 2³ = 2⁵⁻³ = 2² = 4\n\n確認：2⁵ = 32、2³ = 8、32÷8 = 4 ✓',
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
      content: '5³ × 5⁴ はいくつでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '5³ × 5⁴ を指数法則で簡単にすると？',
        options: [
          { id: 'a', label: '5¹²', correct: false },
          { id: 'b', label: '5⁷', correct: true },
          { id: 'c', label: '25⁷', correct: false },
          { id: 'd', label: '5⁷ × 2', correct: false },
        ],
        explanation:
          '同じ底の掛け算なので指数を足します。5³ × 5⁴ = 5³⁺⁴ = 5⁷ = 78,125 です。',
      },
    },
    {
      id: 'alternate',
      title: '対数の伏線',
      content:
        '掛け算が足し算に変わるこの性質は、実は「対数」の基本原理でもあります。昔の科学者は、この性質を利用して複雑な掛け算を簡単な足し算に変換していました。指数法則は対数への入り口でもあるのです。',
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
        '指数法則（掛け算・割り算）：\n• aᵐ × aⁿ = aᵐ⁺ⁿ（掛け算→指数の足し算）\n• aᵐ ÷ aⁿ = aᵐ⁻ⁿ（割り算→指数の引き算）\n• 底が同じときだけ使える\n\nこの法則で複雑な計算がシンプルになります。',
      customScene: "exponent-multiply-summary",
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
