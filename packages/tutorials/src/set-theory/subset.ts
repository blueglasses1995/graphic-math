import { Tutorial } from '../types';

export const subsetTutorial: Tutorial = {
  id: 'subset',
  title: '部分集合',
  description: 'ある集合が別の集合に完全に含まれる関係（⊂, ⊆）を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '入れ子の円',
      content:
        '小さな円が大きな円の中にすっぽり入っています。\n\n小さい方のすべての要素は、大きい方にも含まれています。\n\nこのとき「小さい集合は大きい集合の部分集合」といいます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '部分集合を確かめよう',
      content:
        '要素を追加・削除して、部分集合の関係が成り立つかどうか確かめてみましょう。\n\nすべての要素が相手の集合にも含まれていれば、部分集合です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-definition',
      title: '部分集合の定義',
      content:
        'A ⊆ B とは「Aのすべての要素がBにも属する」ことです。\n\n例: A = {1, 2}, B = {1, 2, 3}\nAのすべての要素（1, 2）がBにも入っている → A ⊆ B\n\n⊆ は「含まれるか等しい」、⊂ は「真に含まれる（等しくない）」を意味します。',
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
      id: 'example-special',
      title: '特別な部分集合',
      content:
        '2つの重要な事実があります。\n\n1. 空集合 ∅ はすべての集合の部分集合\n   ∅ ⊆ A は常に成り立つ（反例がないため）\n\n2. すべての集合は自分自身の部分集合\n   A ⊆ A は常に成り立つ\n\n「すべての要素が〜」という条件は、要素が0個のとき自動的に満たされます。これを「空真」といいます。',
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
      content: 'A = {1, 2, 3} のとき、Aの部分集合はいくつある？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'A = {1, 2, 3} の部分集合の個数は？',
        options: [
          { id: 'a', label: '3個', correct: false },
          { id: 'b', label: '6個', correct: false },
          { id: 'c', label: '7個', correct: false },
          { id: 'd', label: '8個', correct: true },
        ],
        explanation:
          '正解は8個です。\n\n各要素について「入れる/入れない」の2通りがあるので、2³ = 8 個。\n∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3} の8つです。',
      },
    },
    {
      id: 'alternate',
      title: '集合の等しさ',
      content:
        '2つの集合が等しい（A = B）とは、A ⊆ B かつ B ⊆ A が成り立つことです。\n\nつまり「お互いに部分集合」ならば等しい。\n\nこれは集合の等しさを証明するときの基本テクニックです。\n\n「AならばB」と「BならばA」の両方を示す、ダブルインクルージョンと呼ばれます。',
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
        '部分集合のポイント：\n\n・A ⊆ B：Aのすべての要素がBにも属する\n・空集合はすべての集合の部分集合\n・A = B ⟺ A ⊆ B かつ B ⊆ A\n・n個の要素を持つ集合の部分集合は 2ⁿ 個\n\n次は集合どうしの演算「和集合」を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
