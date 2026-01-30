import { Tutorial } from '../types';

export const powerSetTutorial: Tutorial = {
  id: 'power-set',
  title: '冪集合',
  description: 'すべての部分集合を集めた「冪集合」（P(A)）を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '集合の集合',
      content:
        '小さな集合 {a, b} から、すべての部分集合が生成されていきます。\n\n∅, {a}, {b}, {a,b} ── 4つの部分集合が現れました。\n\nこれら全部を集めた集合が「冪集合」です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
        circles: [{ radius: 1, color: '#42a5f5', plane: 'xy' }, { radius: 1, color: '#ef5350', plane: 'xy' }],
      },
      customScene: 'power-set-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '冪集合を探索しよう',
      content:
        '元の集合に要素を追加すると、冪集合がどれだけ急速に大きくなるか体感しましょう。\n\n1個追加するたびに冪集合の大きさは2倍になります。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'power-set-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-definition',
      title: '冪集合の定義',
      content:
        'P(A) = {S | S ⊆ A}\n\nAのすべての部分集合を要素とする集合です。\n\n例: A = {1, 2, 3}\nP(A) = {∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}}\n\n|P(A)| = 2^|A| = 2³ = 8',
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
      id: 'example-why-power',
      title: 'なぜ2のべき乗？',
      content:
        '各要素について「入れる/入れない」の2択があります。\n\nn個の要素があれば、2 × 2 × ... × 2 = 2ⁿ 通り。\n\nこれはビット列との対応です。\n{1,2,3} の部分集合は 000〜111 の3ビットと1対1に対応します。\n例: 101 → {1, 3}（1番目と3番目を選ぶ）',
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
      id: 'predict',
      title: '考えてみよう',
      content: '空集合の冪集合 P(∅) はどうなる？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'P(∅) = ?',
        options: [
          { id: 'a', label: '∅', correct: false },
          { id: 'b', label: '{∅}', correct: true },
          { id: 'c', label: '{{∅}}', correct: false },
          { id: 'd', label: '{∅, {∅}}', correct: false },
        ],
        explanation:
          '正解は {∅} です。\n\n空集合の部分集合は空集合自身だけ。なので P(∅) = {∅}。\n\n|P(∅)| = 2⁰ = 1 で、要素が1つの集合です。空集合とは異なります！',
      },
    },
    {
      id: 'alternate',
      title: '冪集合の爆発的増加',
      content:
        '冪集合は指数的に大きくなります。\n\n|A| = 10 → |P(A)| = 1,024\n|A| = 20 → |P(A)| = 1,048,576\n|A| = 64 → |P(A)| ≈ 1.8 × 10¹⁹\n\nたった64要素の集合でも、部分集合は天文学的な数になります。\n\nこの爆発的増加が、計算機科学で NP問題が難しい理由の一つです。',
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
        '冪集合のポイント：\n\n・P(A) = Aのすべての部分集合の集合\n・|P(A)| = 2^|A|\n・ビット列と1対1対応\n・P(∅) = {∅}（空ではない！）\n\n次は「有限集合と無限集合」── 集合の大きさの概念を深めます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'power-set-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
