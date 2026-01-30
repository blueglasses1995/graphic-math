import { Tutorial } from '../types';

export const howManyTimesTutorial: Tutorial = {
  id: 'how-many-times',
  title: '何回かけた？',
  description: '「2を何回かけたら8になる？」という問いが対数の出発点',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '2を何回かけたら8？',
      content:
        '2 × 2 × 2 = 8。3回かけると8になります。この「何回かけた？」という問いこそが対数の正体です。アニメーションで2が段階的に積み重なる様子を見てみましょう。',
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
        'スライダーで「かける回数」を変えてみてください。回数を増やすと結果がどんどん大きくなります。逆に「結果から回数を求める」のが対数です。',
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
      title: '2を何回かけたら16？',
      content:
        '2 × 2 × 2 × 2 = 16。答えは4回。つまり log₂(16) = 4 です。「底2で16になるまでの回数」を対数で表現します。',
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
      title: '10を何回かけたら1000？',
      content:
        '10 × 10 × 10 = 1000。答えは3回。log₁₀(1000) = 3 です。底が10の場合、「桁数 - 1」と一致するのが特徴です。',
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
        '2を何回かけたら32になるでしょうか？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'log₂(32) はいくつ？',
        options: [
          { id: 'a', label: '4', correct: false },
          { id: 'b', label: '5', correct: true },
          { id: 'c', label: '6', correct: false },
          { id: 'd', label: '3', correct: false },
        ],
        explanation:
          '2⁵ = 32 なので、log₂(32) = 5 です。2を5回かけると32になります。',
      },
    },
    {
      id: 'alternate',
      title: '逆質問で考える',
      content:
        '指数と対数は「逆の問い」です。\n\n指数: 2³ = ? → 答えは8\n対数: 2^? = 8 → 答えは3\n\n「答えを求める」のが指数、「回数を求める」のが対数。同じ関係を逆方向から見ているだけです。',
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
        '対数とは「何回かけた？」への答え。log_a(b) は「aを何回かけたらbになるか」を意味します。\n\n自由に底と値を変えて、対数の感覚をつかんでみてください。',
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
