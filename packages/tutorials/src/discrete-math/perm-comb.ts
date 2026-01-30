import { Tutorial } from '../types';

export const permCombTutorial: Tutorial = {
  id: 'perm-comb',
  title: '順列と組合せ',
  description: '並べ方と選び方の違いを理解し、公式を導く',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '並べるか、選ぶか',
      content:
        '5人の中から3人を選んで一列に並べる → 順列\n5人の中から3人を選ぶ（順序は問わない）→ 組合せ\n\nこの2つは似ているようで全く違います。\n\n順序を区別するかしないかが決定的な違いです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'permutation',
      title: '順列',
      content:
        'n個からr個を選んで並べる順列の数：\n\nP(n, r) = n! / (n-r)!\n\n例：5人から3人を選んで一列に並べる\nP(5, 3) = 5! / 2! = 120 / 2 = 60通り\n\n1番目の選び方が5通り、2番目が4通り、3番目が3通り。\n5 × 4 × 3 = 60 と計算しても同じです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'combination',
      title: '組合せ',
      content:
        'n個からr個を選ぶ組合せの数：\n\nC(n, r) = n! / (r! × (n-r)!)\n\n例：5人から3人を選ぶ\nC(5, 3) = 5! / (3! × 2!) = 120 / 12 = 10通り\n\n順列60通りを、同じメンバーの並べ替え 3! = 6 で割ると 60/6 = 10 です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'with-repetition',
      title: '重複を許す場合',
      content:
        '重複順列：n種類からr個を選んで並べる（繰り返しOK）→ n^r 通り\n\n重複組合せ：n種類からr個を選ぶ（繰り返しOK、順序なし）\n→ C(n+r-1, r) 通り\n\n例：3種のアイスから5スクープ選ぶ\nC(3+5-1, 5) = C(7, 5) = 21通り',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '順列と組合せの使い分けを確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '10人から委員長・副委員長・書記を選ぶ場合の数は？',
        options: [
          { id: 'a', label: 'C(10,3) = 120', correct: false },
          { id: 'b', label: 'P(10,3) = 720', correct: true },
          { id: 'c', label: '10³ = 1000', correct: false },
          { id: 'd', label: '3! × C(10,3) = 720', correct: false },
        ],
        explanation:
          '正解はP(10,3) = 720です。役職が異なるので順序が重要です。委員長10通り × 副委員長9通り × 書記8通り = 720通り。なおd は計算結果は同じですが、考え方として順列を使うのが自然です。',
      },
    },
    {
      id: 'identity',
      title: '重要な性質',
      content:
        '組合せの重要な性質：\n\n・C(n, r) = C(n, n-r)（選ぶのと残すのは同じ）\n・C(n, 0) = C(n, n) = 1\n・C(n, 1) = n\n・C(n, r) = C(n-1, r-1) + C(n-1, r)（パスカルの三角形）\n\n最後の性質は「ある要素を含むか含まないか」で場合分けした結果です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
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
        '・順列 P(n,r)：順序あり → n!/(n-r)!\n・組合せ C(n,r)：順序なし → n!/(r!(n-r)!)\n・重複あり/なしで4パターン\n・「順序を区別するか」が判断基準\n\n順列と組合せは確率論の計算で不可欠です。\n\n次は、二項係数とパスカルの三角形を詳しく見ていきます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
