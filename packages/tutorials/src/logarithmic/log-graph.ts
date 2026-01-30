import { Tutorial } from '../types';

export const logGraphTutorial: Tutorial = {
  id: 'log-graph',
  title: '対数のグラフ',
  description: 'y = log_a(x) のグラフの形と特徴を視覚的に理解する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '指数のグラフを裏返す',
      content:
        'y = 2^x のグラフを y = x の線で鏡に映すと、y = log₂(x) のグラフが現れます。指数関数と対数関数は鏡像の関係です。',
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
        '底の値を変えてみてください。底が大きいほどグラフは緩やかに、底が1に近いほど急になります。底が1より小さいと減少関数になります。',
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
      title: '必ず通る点 (1, 0)',
      content:
        'どんな底でも log_a(1) = 0。なぜなら a⁰ = 1 だから。すべての対数グラフは (1, 0) を通ります。',
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
      title: '漸近線 x = 0',
      content:
        'x が 0 に近づくと、対数は -∞ に発散します。y軸（x = 0）は漸近線です。x が負の領域にはグラフが存在しません。',
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
        'log₂(x) のグラフで x = 4 のときの y の値は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'log₂(4) はいくつ？',
        options: [
          { id: 'a', label: '1', correct: false },
          { id: 'b', label: '2', correct: true },
          { id: 'c', label: '3', correct: false },
          { id: 'd', label: '4', correct: false },
        ],
        explanation:
          '2² = 4 なので log₂(4) = 2。グラフ上では点 (4, 2) を通ります。',
      },
    },
    {
      id: 'alternate',
      title: '増加するが遅い',
      content:
        '対数関数は x が大きくなるほど増加しますが、増加の速度はどんどん遅くなります。x = 1 から x = 2 への変化量と、x = 100 から x = 200 への変化量は同じ log₂(2) = 1 です。\n\nこの「倍率が同じなら同じだけ増える」性質が対数の本質です。',
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
        '対数グラフは (1, 0) を必ず通り、x = 0 が漸近線。底 > 1 なら増加関数で、増加速度は徐々に緩やかになります。\n\n底を変えてグラフの形を確かめてみてください。',
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
