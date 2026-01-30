import { Tutorial } from '../types';

export const riemannSumTutorial: Tutorial = {
  id: 'riemann-sum',
  title: '区分求積法',
  description: 'リーマン和の定義と極限による面積の厳密な求め方',
  category: 'integral-calculus',
  steps: [
    {
      id: 'hook',
      title: 'リーマン和',
      content:
        '前回は長方形で面積を近似しました。\n\nこれを数学的に定式化したのが「リーマン和」です。\n\n区間を n 等分し、各小区間の代表点での関数値 × 幅 を足し合わせます。\n\nアニメーションで n が増えていく様子を見てみましょう。',
      customScene: 'riemann-sum-animation',
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
        '分割数 n を変えてリーマン和の値がどう変わるか確かめてみましょう。\n\nn = 4, 10, 50, 100 と増やしていくと、値が収束していく様子が見えます。',
      customScene: 'riemann-sum-interactive',
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
      title: 'リーマン和の式',
      content:
        'f(x) を [a, b] で積分するリーマン和は：\n\nSₙ = Σᵢ₌₁ⁿ f(xᵢ*) · Δx\n\nここで Δx = (b - a) / n、xᵢ* は i 番目の小区間の代表点です。\n\n代表点の選び方（左端・右端・中点など）は自由ですが、n → ∞ で同じ値に収束します。\n\nこの極限値が定積分 ∫ₐᵇ f(x) dx です。',
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
      title: '具体例：∫₀¹ x² dx',
      content:
        'f(x) = x² を [0, 1] でリーマン和にすると（右端を使用）：\n\nSₙ = Σᵢ₌₁ⁿ (i/n)² · (1/n) = (1/n³) · Σᵢ₌₁ⁿ i²\n\nΣi² = n(n+1)(2n+1)/6 を使うと：\n\nSₙ = n(n+1)(2n+1) / (6n³) = (2n² + 3n + 1) / (6n²)\n\nn → ∞ で Sₙ → 2/6 = 1/3。\n\nよって ∫₀¹ x² dx = 1/3 と厳密に示せました。',
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
        '∫₀¹ x³ dx をリーマン和の極限で求めると、どの値になるでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '∫₀¹ x³ dx の値は？',
        options: [
          { id: 'a', label: '1/2', correct: false },
          { id: 'b', label: '1/3', correct: false },
          { id: 'c', label: '1/4', correct: true },
          { id: 'd', label: '1/5', correct: false },
        ],
        explanation:
          '正解は 1/4 です。\n\nΣi³ = [n(n+1)/2]² を使って計算すると、n → ∞ で 1/4 に収束します。\n\n一般に ∫₀¹ xⁿ dx = 1/(n+1) というパターンが見えてきます。',
      },
    },
    {
      id: 'alternate',
      title: 'Σ の公式なしでも',
      content:
        '実は毎回 Σ の公式を使う必要はありません。\n\n微積分学の基本定理を使えば、原始関数を見つけるだけで積分が計算できます。\n\nリーマン和は「積分とは何か」を定義するための概念です。\n\n実際の計算では、もっと効率的な方法（不定積分）を使います。\n\nしかし定義を理解していることが、応用で迷わないための土台になります。',
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
        'リーマン和 Sₙ = Σ f(xᵢ*) · Δx の n → ∞ の極限が定積分です。\n\nこれは「無限に細かい長方形の和」という直感を数学的に定式化したものです。\n\n分割数を変えて、収束の様子を体感してみてください。',
      customScene: 'riemann-sum-summary',
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
