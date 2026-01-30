import { Tutorial } from '../types';

export const exponentIntroTutorial: Tutorial = {
  id: 'exponent-intro',
  title: '指数とは',
  description: '「何回掛けるか」を表す指数の基本概念を理解する',
  category: 'exponential',
  steps: [
    {
      id: 'hook',
      title: '同じ数を何回も掛ける',
      content:
        '3×3×3×3×3 を毎回書くのは大変です。「3を5回掛ける」をもっと簡単に書けないでしょうか？アニメーションで掛け算が積み上がる様子を見てみましょう。',
      customScene: "exponent-intro-animation",
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
      title: '底と指数を変えてみよう',
      content:
        'スライダーで底（かける数）と指数（回数）を変えて、結果がどう変わるか試してみましょう。底が大きいほど、指数が大きいほど、結果は急速に大きくなります。',
      customScene: "exponent-intro-interactive",
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
      title: '指数の記法',
      content:
        'aⁿ は「aをn回掛ける」という意味です。\n\naを「底（てい）」、nを「指数（しすう）」と呼びます。\n\n例：\n2³ = 2×2×2 = 8\n5² = 5×5 = 25\n10⁴ = 10×10×10×10 = 10,000',
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
      title: '指数は「次元」のイメージ',
      content:
        '2¹ = 2（線の長さ）\n2² = 4（正方形の面積）\n2³ = 8（立方体の体積）\n\n指数が1つ増えるごとに、次元が1つ上がるイメージです。長さ→面積→体積と、スケールがどんどん大きくなっていきます。',
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
      content: '3⁴はいくつでしょう？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '3⁴ = 3×3×3×3 はいくつ？',
        options: [
          { id: 'a', label: '12', correct: false },
          { id: 'b', label: '27', correct: false },
          { id: 'c', label: '81', correct: true },
          { id: 'd', label: '64', correct: false },
        ],
        explanation:
          '3⁴ = 3×3×3×3 = 9×9 = 81 です。3³=27と混同しやすいですが、もう1回3を掛けることを忘れずに。',
      },
    },
    {
      id: 'alternate',
      title: '10の累乗と桁数',
      content:
        '10の累乗は特に便利です。10¹=10、10²=100、10³=1000…。指数の数が桁数を表します。10⁶なら100万（7桁の数の始まり）。科学では非常に大きな数や小さな数を10の累乗で表します（科学的記数法）。',
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
        '指数の基本：\n• aⁿ は「aをn回掛ける」\n• aが底、nが指数\n• 指数が1増えるだけで結果はa倍になる\n• 10の累乗は桁数と直結\n\n次は底の違いによるグラフの変化を見ていきましょう。',
      customScene: "exponent-intro-summary",
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
