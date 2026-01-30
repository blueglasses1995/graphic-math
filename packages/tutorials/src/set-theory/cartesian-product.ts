import { Tutorial } from '../types';

export const cartesianProductTutorial: Tutorial = {
  id: 'cartesian-product',
  title: '直積集合',
  description: '2つの集合からペア（順序対）を作る直積（A × B）を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: 'すべての組み合わせ',
      content:
        '左に色の集合、上に形の集合があります。\n\n格子状にすべての組み合わせが生成されています。\n\nこれが「直積集合」── すべてのペアを作る演算です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
        circles: [{ radius: 1, color: '#42a5f5', plane: 'xy' }, { radius: 1, color: '#ef5350', plane: 'xy' }],
      },
      customScene: 'cartesian-product-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: 'ペアを作ってみよう',
      content:
        '2つの集合に要素を追加して、直積がどう変わるか観察しましょう。\n\n要素を増やすと、ペアの数は急速に増えます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'cartesian-product-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-basic',
      title: '直積集合の定義',
      content:
        'A × B = {(a, b) | a ∈ A, b ∈ B}\n\n例: A = {1, 2}, B = {x, y}\nA × B = {(1,x), (1,y), (2,x), (2,y)}\n\n(a, b) は「順序対」です。(1, x) と (x, 1) は異なります。\n\n要素数は |A × B| = |A| × |B| です。',
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
      id: 'example-coordinate',
      title: '座標平面は直積',
      content:
        '実は座標平面は直積集合です！\n\nℝ × ℝ = ℝ²\n\n実数全体の集合 ℝ と ℝ の直積が、2次元平面のすべての点 (x, y) を表します。\n\n同様に ℝ × ℝ × ℝ = ℝ³ が3次元空間です。\n\n「デカルト積」という名前は、座標系を発明したデカルトに由来します。',
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
      title: '考えてみよう',
      content: 'A = {a, b, c}, B = {1, 2} のとき |A × B| は？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '|A| = 3, |B| = 2 のとき |A × B| = ?',
        options: [
          { id: 'a', label: '5', correct: false },
          { id: 'b', label: '6', correct: true },
          { id: 'c', label: '8', correct: false },
          { id: 'd', label: '9', correct: false },
        ],
        explanation:
          '正解は6です。\n\n|A × B| = |A| × |B| = 3 × 2 = 6\n\n(a,1), (a,2), (b,1), (b,2), (c,1), (c,2) の6つです。',
      },
    },
    {
      id: 'alternate',
      title: 'データベースのJOIN',
      content:
        'データベースのCROSS JOINは直積そのものです。\n\nSELECT * FROM colors CROSS JOIN shapes\n\nすべての色と形の組み合わせが生成されます。\n\nまた、トランプの全カードは {スート} × {数} の直積です。\n4 × 13 = 52枚。',
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
        '直積集合のポイント：\n\n・A × B = すべての順序対 (a, b) の集合\n・|A × B| = |A| × |B|\n・順序が重要: A × B ≠ B × A（一般に）\n・座標平面 = ℝ × ℝ\n\n次は「冪集合」── すべての部分集合を集めた集合を学びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'cartesian-product-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
