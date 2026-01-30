import { Tutorial } from '../types';

export const fractionalExpTutorial: Tutorial = {
  id: 'fractional-exp',
  title: '分数の指数',
  description: '分数の指数がなぜ累乗根を意味するのかを理解する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '2の0.5乗って何？',
      content:
        '2⁰·⁵ とはどんな数でしょう？2¹=2、2⁰=1 だから、その間の数？実は √2 ≈ 1.414 です。なぜ「半分の指数」が「平方根」になるのか、アニメーションで見てみましょう。',
      customScene: "fractional-exp-animation",
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
      title: '指数を小数で変えてみよう',
      content:
        'スライダーで指数を0から2まで連続的に変えてみましょう。整数以外の指数でも滑らかにつながることがわかります。',
      customScene: "fractional-exp-interactive",
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
      title: 'なぜ a^(1/2) = √a なのか',
      content:
        '指数法則 (aᵐ)ⁿ = aᵐˣⁿ を使います。\n\n(a^(1/2))² = a^(1/2 × 2) = a¹ = a\n\nつまり a^(1/2) は「2乗するとaになる数」＝ √a\n\n同様に：\na^(1/3) = ³√a（立方根）\na^(1/n) = ⁿ√a（n乗根）',
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
      title: '一般の分数指数',
      content:
        'a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ)\n\n例：\n8^(2/3) = (³√8)² = 2² = 4\n27^(2/3) = (³√27)² = 3² = 9\n4^(3/2) = (√4)³ = 2³ = 8\n\n分母がルート、分子が累乗です。',
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
      content: '16^(3/4) はいくつでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '16^(3/4) の値は？',
        options: [
          { id: 'a', label: '4', correct: false },
          { id: 'b', label: '8', correct: true },
          { id: 'c', label: '12', correct: false },
          { id: 'd', label: '64', correct: false },
        ],
        explanation:
          '16^(3/4) = (⁴√16)³ = 2³ = 8。まず4乗根を取ると2、それを3乗すると8です。',
      },
    },
    {
      id: 'alternate',
      title: 'グラフで見る分数指数',
      content:
        '指数関数 y = aˣ のグラフは滑らかな曲線です。整数の点だけでなく、分数の指数の点もこの曲線上にきれいに乗ります。分数の指数は、整数の指数の「間を埋める」役割を果たしているのです。',
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
        '分数の指数：\n• a^(1/n) = ⁿ√a（n乗根）\n• a^(m/n) = (ⁿ√a)ᵐ\n• 指数法則の自然な拡張\n• グラフ上では整数点の間を滑らかにつなぐ\n\nこれで指数は整数→0→負→分数へと拡張されました。',
      customScene: "fractional-exp-summary",
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
