import { Tutorial } from '../types';

export const changeOfBaseTutorial: Tutorial = {
  id: 'change-of-base',
  title: '底の変換',
  description: 'log_a(x) = log_b(x) / log_b(a) の底の変換公式を理解する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: 'どんな底でも計算できる',
      content:
        '電卓には log₁₀ と ln しかないのに、log₂(7) を計算できます。底の変換公式: log₂(7) = ln(7) / ln(2) ≈ 2.807。',
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
        '底と真数を変えて、底の変換公式で計算した値と直接計算した値が一致することを確かめてください。',
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
      title: '公式の導出',
      content:
        'log_a(x) = c とおくと a^c = x。両辺に log_b をとると c × log_b(a) = log_b(x)。よって c = log_b(x) / log_b(a)。',
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
      title: '具体例: log₃(81)',
      content:
        'log₃(81) = log₁₀(81) / log₁₀(3) = 1.908 / 0.477 = 4。確かに 3⁴ = 81 です。どんな底を経由しても同じ結果が得られます。',
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
        'log₄(16) を底の変換公式で求めると？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'log₂(16) / log₂(4) はいくつ？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '2', correct: true },
          { id: 'c', label: '3', correct: false },
          { id: 'd', label: '4', correct: false },
        ],
        explanation:
          'log₂(16) / log₂(4) = 4 / 2 = 2。これは log₄(16) = 2 に等しく、4² = 16 と一致します。',
      },
    },
    {
      id: 'alternate',
      title: '底の変換の逆',
      content:
        '底の変換公式から便利な関係式が導けます。\n\nlog_a(b) × log_b(a) = 1\n\nつまり log_a(b) = 1 / log_b(a)。底と真数を入れ替えると逆数になります。',
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
        'log_a(x) = log_b(x) / log_b(a)。底の変換公式により、任意の底の対数を計算できます。\n\n自由に底を変えて変換公式を体感してください。',
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
