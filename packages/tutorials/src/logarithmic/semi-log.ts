import { Tutorial } from '../types';

export const semiLogTutorial: Tutorial = {
  id: 'semi-log',
  title: '片対数グラフ',
  description: '片対数グラフで指数関数が直線に見える理由を学ぶ',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '指数関数が直線になる',
      content:
        'y = 2^x を普通にプロットすると急カーブ。でもy軸を対数スケールにすると直線に変わります。これが片対数グラフの力です。',
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
        'y軸のスケールを線形と対数で切り替えて、指数関数の見え方がどう変わるか観察してください。',
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
      title: 'なぜ直線になるのか',
      content:
        'y = a^x の両辺に log をとると log(y) = x × log(a)。Y = log(y) とおけば Y = x × log(a) で、これは傾き log(a) の直線です。',
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
      title: '感染症の拡大',
      content:
        '感染者数が指数的に増加するとき、片対数グラフで直線になります。直線の傾きが急なほど拡大が速い。傾きが緩やかになれば拡大が鈍化しています。',
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
        '片対数グラフで直線の傾きが2倍になると、元のデータはどうなる？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '片対数グラフで傾きが2倍になると？',
        options: [
          { id: 'a', label: '増加速度が2倍', correct: false },
          { id: 'b', label: '底が2乗になる（増加が加速）', correct: true },
          { id: 'c', label: '値が2倍になる', correct: false },
          { id: 'd', label: '変化なし', correct: false },
        ],
        explanation:
          '傾きは log(a) に比例するので、傾きが2倍 → log(a)が2倍 → a が a² に。指数的成長の底が2乗になります。',
      },
    },
    {
      id: 'alternate',
      title: '半減期の読み取り',
      content:
        '放射性崩壊のデータを片対数グラフにプロットすると直線になります。\n\n直線がy軸方向に半分になるまでのx軸の幅が半減期。片対数グラフなら半減期を目で読み取れます。',
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
        '片対数グラフはy軸だけを対数スケールにしたグラフ。指数関数が直線に見え、成長率や半減期を視覚的に読み取れます。\n\nスケールを切り替えて確認してみてください。',
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
