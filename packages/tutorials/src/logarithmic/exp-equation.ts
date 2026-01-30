import { Tutorial } from '../types';

export const expEquationTutorial: Tutorial = {
  id: 'exp-equation',
  title: '指数方程式を解く',
  description: '対数を使って指数方程式を解く方法を学ぶ',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '指数の中の未知数',
      content:
        '2^x = 64 なら x = 6 と暗算できます。でも 3^x = 50 は？こんなとき対数が威力を発揮します。両辺に log をとれば x = log₃(50) ≈ 3.56。',
      customScene: 'exp-equation-animation',
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
        '底と目標値を変えて、対数で指数方程式を解く過程を体験してください。',
      customScene: 'exp-equation-interactive',
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
      title: '2^x = 1024',
      content:
        '両辺に log₂ をとると x = log₂(1024) = 10。2¹⁰ = 1024 です。きれいな数なら暗算でも解けますが、対数の方法は常に使えます。',
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
      title: '5^x = 200',
      content:
        '両辺に log₁₀ をとると x × log₁₀(5) = log₁₀(200)。x = log₁₀(200) / log₁₀(5) = 2.301 / 0.699 ≈ 3.29。底の変換公式が活躍します。',
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
        '10^x = 10000 のとき x は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '10^x = 10000 のとき x は？',
        options: [
          { id: 'a', label: '3', correct: false },
          { id: 'b', label: '4', correct: true },
          { id: 'c', label: '5', correct: false },
          { id: 'd', label: '100', correct: false },
        ],
        explanation:
          '10⁴ = 10000 なので x = log₁₀(10000) = 4 です。',
      },
    },
    {
      id: 'alternate',
      title: '倍になる時間',
      content:
        '「年利5%で元本が2倍になるのは何年後？」\n\n1.05^x = 2 → x = ln(2) / ln(1.05) ≈ 14.2年\n\n72の法則: 72 ÷ 5 = 14.4年。対数を使えば正確に、72の法則で概算できます。',
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
        '指数方程式は両辺に対数をとって解きます。a^x = b → x = log_a(b) = ln(b)/ln(a)。\n\n自由に値を変えて指数方程式を解いてみてください。',
      customScene: 'exp-equation-summary',
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
