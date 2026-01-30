import { Tutorial } from '../types';

export const logGrowthRateTutorial: Tutorial = {
  id: 'log-growth-rate',
  title: '対数の増加速度',
  description: '対数関数がどれほどゆっくり増加するかを体感する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: 'どこまでも遅い増加',
      content:
        'log₂(x) は x = 1000000 でもたった約20。x が100万倍になっても対数は20しか増えません。指数関数の爆発的増加の逆で、対数は驚くほどゆっくり増加します。',
      customScene: 'log-growth-rate-animation',
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
        'x の値を大きくしていって、log(x) の増加がどんどん鈍くなる様子を観察してください。',
      customScene: 'log-growth-rate-interactive',
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
      title: '増加の比較',
      content:
        'x = 10: log₁₀(x) = 1\nx = 100: log₁₀(x) = 2\nx = 1000: log₁₀(x) = 3\n\nxが10倍になるたびに対数は1しか増えません。これが「対数的増加」の本質です。',
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
      title: '関数の成長速度ランキング',
      content:
        '遅い ← log(x) < √x < x < x² < 2^x → 速い\n\n対数は最も遅い成長関数の一つ。だからこそアルゴリズムの計算量が O(log n) なら「とても効率的」と評価されます。',
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
        'log₂(1024) = 10 です。では log₂(1048576) は？（1048576 = 1024²）',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'log₂(1048576) はいくつ？',
        options: [
          { id: 'a', label: '15', correct: false },
          { id: 'b', label: '20', correct: true },
          { id: 'c', label: '100', correct: false },
          { id: 'd', label: '1024', correct: false },
        ],
        explanation:
          '1048576 = 2²⁰ なので log₂(1048576) = 20。100万を超える数でも対数はたった20です。',
      },
    },
    {
      id: 'alternate',
      title: '感覚の対数性',
      content:
        '人間の感覚も対数的です。\n\n明るさが2倍→少し明るく感じる\n明るさが10倍→かなり明るく感じる\n明るさが100倍→とても明るく感じる\n\n刺激の強さに対する感覚の大きさが対数的（ウェーバー・フェヒナーの法則）。',
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
        '対数関数は非常にゆっくり増加します。xが10倍になっても対数は1しか増えません。アルゴリズムや人間の感覚にも関わる重要な性質です。\n\n自由に値を変えて増加の遅さを体感してください。',
      customScene: 'log-growth-rate-summary',
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
