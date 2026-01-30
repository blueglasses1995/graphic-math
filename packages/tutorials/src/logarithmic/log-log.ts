import { Tutorial } from '../types';

export const logLogTutorial: Tutorial = {
  id: 'log-log',
  title: '両対数グラフ',
  description: '両対数グラフでべき乗関数が直線に見える理由を学ぶ',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: 'べき乗が直線になる',
      content:
        'y = x² を両対数グラフ（x軸もy軸も対数スケール）にプロットすると傾き2の直線に。y = x³ なら傾き3。べき乗の指数が直線の傾きになります。',
      customScene: 'log-log-animation',
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
        'べき乗の指数を変えて、両対数グラフ上での傾きがどう変わるか観察してください。',
      customScene: 'log-log-interactive',
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
        'y = x^n の両辺に log をとると log(y) = n × log(x)。X = log(x), Y = log(y) とおけば Y = nX で、傾き n の原点を通る直線です。',
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
      title: 'ケプラーの第三法則',
      content:
        '惑星の公転周期 T と軌道半径 r の関係は T² ∝ r³。両対数グラフにプロットすると傾き 3/2 の直線になります。天文データから法則を発見する強力なツールです。',
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
        '両対数グラフで傾き 0.5 の直線は、どんな関数を表す？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '両対数グラフで傾き 0.5 の直線が表す関数は？',
        options: [
          { id: 'a', label: 'y = x/2', correct: false },
          { id: 'b', label: 'y = √x', correct: true },
          { id: 'c', label: 'y = 2x', correct: false },
          { id: 'd', label: 'y = x²', correct: false },
        ],
        explanation:
          '傾き 0.5 = 1/2 なので y = x^(1/2) = √x。べき乗の指数が傾きに対応します。',
      },
    },
    {
      id: 'alternate',
      title: '片対数 vs 両対数',
      content:
        '使い分けのポイント:\n\n片対数: 指数関数 y = a^x を直線にする\n両対数: べき乗関数 y = x^n を直線にする\n\nデータをプロットして直線になる方を選べば、データの性質がわかります。',
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
        '両対数グラフでは y = x^n が傾き n の直線になります。べき乗の指数を傾きから読み取れる強力なツールです。\n\n指数を変えて傾きの変化を確認してみてください。',
      customScene: 'log-log-summary',
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
