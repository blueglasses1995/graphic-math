import { Tutorial } from '../types';

export const logDigitsTutorial: Tutorial = {
  id: 'log-digits',
  title: '対数と桁数',
  description: '常用対数で整数の桁数を求める方法を学ぶ',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '2¹⁰⁰ は何桁？',
      content:
        '2¹⁰⁰ を直接計算するのは大変。でも log₁₀(2¹⁰⁰) = 100 × log₁₀(2) = 100 × 0.301 = 30.1。整数部分が30なので、2¹⁰⁰ は31桁の数です。',
      customScene: 'log-digits-animation',
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
        '底と指数を変えて、対数から桁数を求めてみてください。桁数 = floor(log₁₀(N)) + 1 です。',
      customScene: 'log-digits-interactive',
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
      title: 'なぜ桁数がわかるのか',
      content:
        'n桁の数 N は 10^(n-1) ≤ N < 10^n を満たします。両辺に log₁₀ をとると n-1 ≤ log₁₀(N) < n。つまり桁数 = floor(log₁₀(N)) + 1。',
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
      title: '3²⁰ は何桁？',
      content:
        'log₁₀(3²⁰) = 20 × log₁₀(3) = 20 × 0.4771 = 9.542。整数部分が9なので、3²⁰ は10桁の数。実際に 3²⁰ = 3486784401 で確かに10桁です。',
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
        '5¹⁰ は何桁？（log₁₀(5) ≈ 0.699）',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '5¹⁰ は何桁の数？',
        options: [
          { id: 'a', label: '6桁', correct: false },
          { id: 'b', label: '7桁', correct: true },
          { id: 'c', label: '8桁', correct: false },
          { id: 'd', label: '10桁', correct: false },
        ],
        explanation:
          'log₁₀(5¹⁰) = 10 × 0.699 = 6.99。整数部分が6なので7桁。実際に 5¹⁰ = 9765625 で7桁です。',
      },
    },
    {
      id: 'alternate',
      title: '最高位の数字もわかる',
      content:
        'log₁₀(N) の小数部分から最高位の数字もわかります。\n\n2¹⁰⁰: log₁₀ = 30.103 → 小数部分 0.103 → 10^0.103 ≈ 1.27\n\nよって 2¹⁰⁰ の最高位は1。実際に 2¹⁰⁰ = 1267650600...（1で始まる）。',
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
        '桁数 = floor(log₁₀(N)) + 1。巨大な数の桁数も対数で簡単に求められます。小数部分からは最高位の数字もわかります。\n\n自由に数を変えて桁数を予測してみてください。',
      customScene: 'log-digits-summary',
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
