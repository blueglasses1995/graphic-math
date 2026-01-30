import { Tutorial } from '../types';

export const logAlgorithmTutorial: Tutorial = {
  id: 'log-algorithm',
  title: '【実践】logとアルゴリズム',
  description: '二分探索や分割統治法に log が現れる理由を理解する',
  category: 'logarithmic',
  steps: [
    {
      id: 'hook',
      title: '100万件を20回で見つける',
      content:
        '100万件のソート済みデータから1つの値を探す。二分探索なら最大 log₂(1000000) ≈ 20回の比較で見つかります。100万が20に圧縮される対数の力です。',
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
        '二分探索を体験してください。毎回候補が半分になる様子を観察しましょう。何回で見つかるか予測してみてください。',
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
      title: 'なぜ log が現れるのか',
      content:
        'n 個のデータを毎回半分にすると、k 回後に残りは n/2^k 個。残りが1個になるとき n/2^k = 1 → k = log₂(n)。「何回半分にできるか」が対数です。',
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
      title: 'O(n log n) のソート',
      content:
        'マージソートは配列を半分に分割（log n 段）× 各段で n 回の処理 → O(n log n)。n = 100万なら約2000万回の操作。O(n²) の1兆回と比べれば圧倒的に高速です。',
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
        '10億件のデータに対する二分探索の最大比較回数は？',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'log₂(1000000000) は約いくつ？',
        options: [
          { id: 'a', label: '約20', correct: false },
          { id: 'b', label: '約30', correct: true },
          { id: 'c', label: '約100', correct: false },
          { id: 'd', label: '約1000', correct: false },
        ],
        explanation:
          '2¹⁰ ≈ 10³ なので 2³⁰ ≈ 10⁹。10億件でもたった約30回の比較で済みます。',
      },
    },
    {
      id: 'alternate',
      title: '木構造と対数',
      content:
        '二分木の高さは log₂(n)。B木のような多分木ではログの底が分岐数になります。\n\nデータベースのインデックスは B木を使い、数十億レコードでも3〜4回のディスクアクセスで目的のデータを見つけます。対数のおかげです。',
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
        '「毎回半分に分ける」操作の回数が log₂(n)。二分探索、マージソート、木構造など、効率的なアルゴリズムの核心に対数があります。\n\nデータ数を変えて比較回数の変化を確認してください。',
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
