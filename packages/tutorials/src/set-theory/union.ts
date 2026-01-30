import { Tutorial } from '../types';

export const unionTutorial: Tutorial = {
  id: 'union',
  title: '和集合',
  description: '2つの集合を合わせる演算（∪）を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '2つの集合を合わせる',
      content:
        '2つのベン図の円が近づいて、重なり合っています。\n\n両方の円を合わせた領域全体 ── それが「和集合」です。\n\n「どちらか一方に属するもの全部」を集めた集合です。',
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
      title: '和集合を作ってみよう',
      content:
        '2つの集合に要素を追加して、和集合がどう変わるか見てみましょう。\n\n重複する要素は1つとして数えられます。',
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
      id: 'example-basic',
      title: '和集合の基本',
      content:
        'A = {1, 2, 3}, B = {2, 3, 4} のとき：\n\nA ∪ B = {1, 2, 3, 4}\n\n「Aに属する、またはBに属する」要素をすべて集めます。\n\n∪ は「ユニオン（union）」の U の形です。「または（OR）」に対応します。',
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
      id: 'example-properties',
      title: '和集合の性質',
      content:
        '和集合にはこんな性質があります。\n\n・A ∪ A = A（同じもの同士の和は自分自身）\n・A ∪ ∅ = A（空集合との和は変わらない）\n・A ∪ B = B ∪ A（交換法則）\n・A ∪ (B ∪ C) = (A ∪ B) ∪ C（結合法則）\n\nどれも直感的に納得できるはずです。',
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
      content: 'A = {a, b, c}, B = {b, c, d, e} のとき、A ∪ B の要素数は？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'A = {a, b, c}, B = {b, c, d, e} のとき |A ∪ B| = ?',
        options: [
          { id: 'a', label: '3', correct: false },
          { id: 'b', label: '5', correct: true },
          { id: 'c', label: '7', correct: false },
          { id: 'd', label: '4', correct: false },
        ],
        explanation:
          '正解は5です。\n\nA ∪ B = {a, b, c, d, e} で5個。b, c は両方にありますが、和集合では1回だけ数えます。',
      },
    },
    {
      id: 'alternate',
      title: 'SQLとの対比',
      content:
        'データベースのSQLでは、UNION演算子がまさに和集合です。\n\nSELECT name FROM table_a\nUNION\nSELECT name FROM table_b\n\nこれは2つのテーブルの結果を重複なしで合わせます。\n\n集合論の概念がそのままデータベースに活きている例です。',
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
        '和集合のポイント：\n\n・A ∪ B = 「Aまたは Bに属する要素」の集合\n・重複は1回だけ数える\n・交換法則・結合法則が成り立つ\n・論理の OR に対応\n\n次は「共通部分」── 2つの集合の重なりを学びます。',
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
