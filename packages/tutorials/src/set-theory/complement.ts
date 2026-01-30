import { Tutorial } from '../types';

export const complementTutorial: Tutorial = {
  id: 'complement',
  title: '補集合',
  description: '全体集合に対する「残り」の部分（Aᶜ）を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '裏返しの世界',
      content:
        '四角い全体集合の中に、1つの円があります。\n\n円の外側がハイライトされています。これが「補集合」です。\n\n集合の内と外が反転する面白い概念です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
        circles: [{ radius: 1, color: '#42a5f5', plane: 'xy' }, { radius: 1, color: '#ef5350', plane: 'xy' }],
      },
      customScene: 'complement-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '補集合を観察しよう',
      content:
        '集合に要素を追加・削除すると、補集合が自動的に変わります。\n\n集合を大きくすると補集合は小さくなり、その逆もまた然り。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'complement-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-basic',
      title: '補集合の基本',
      content:
        '全体集合 U = {1, 2, 3, 4, 5} のとき：\n\nA = {1, 3, 5} ならば Aᶜ = {2, 4}\n\n補集合 Aᶜ（またはĀ）は「全体のうち、Aに属さない要素」の集合です。\n\nA ∪ Aᶜ = U（合わせれば全体）\nA ∩ Aᶜ = ∅（重なりはない）',
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
      id: 'example-double',
      title: '二重否定',
      content:
        '補集合の補集合は元に戻ります。\n\n(Aᶜ)ᶜ = A\n\nこれは論理における二重否定 ¬(¬P) = P と同じです。\n\n「赤くないものの中で、赤くないもの以外」= 赤いもの。当たり前ですが、数学的に重要です。',
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
      content: 'U = {1,2,3,4,5,6,7,8,9,10}, A = {偶数} のとき Aᶜ は？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'U = {1,...,10}, A = {2,4,6,8,10} のとき Aᶜ = ?',
        options: [
          { id: 'a', label: '{1, 2, 3, 4, 5}', correct: false },
          { id: 'b', label: '{1, 3, 5, 7, 9}', correct: true },
          { id: 'c', label: '{3, 5, 7}', correct: false },
          { id: 'd', label: '∅', correct: false },
        ],
        explanation:
          '正解は {1, 3, 5, 7, 9} です。\n\n全体集合から偶数を除くと奇数が残ります。偶数の補集合は奇数の集合です。',
      },
    },
    {
      id: 'alternate',
      title: '差集合との関係',
      content:
        '補集合は実は差集合の特別な場合です。\n\nAᶜ = U \\ A\n\n全体集合からAを引いたものが補集合です。\n\nまた、一般の差集合も補集合で書けます：\nA \\ B = A ∩ Bᶜ\n\n「Aに属し、かつBに属さない」= 「Aに属し、かつBの補集合に属する」',
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
        '補集合のポイント：\n\n・Aᶜ = 全体集合のうちAに属さない要素\n・A ∪ Aᶜ = U, A ∩ Aᶜ = ∅\n・(Aᶜ)ᶜ = A（二重否定）\n・Aᶜ = U \\ A\n\n次は集合論で最も美しい法則「ド・モルガンの法則」を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'complement-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
