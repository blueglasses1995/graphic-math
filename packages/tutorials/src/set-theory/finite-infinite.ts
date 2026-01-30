import { Tutorial } from '../types';

export const finiteInfiniteTutorial: Tutorial = {
  id: 'finite-infinite',
  title: '有限集合と無限集合',
  description: '要素の個数が有限か無限かによる集合の分類を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '終わりのある集合、終わりのない集合',
      content:
        '画面上に要素が次々と追加されています。\n\nある集合は要素の追加が止まりますが、もう一方は永遠に続きます。\n\n前者が有限集合、後者が無限集合です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
        circles: [{ radius: 1, color: '#42a5f5', plane: 'xy' }, { radius: 1, color: '#ef5350', plane: 'xy' }],
      },
      customScene: 'finite-infinite-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '有限と無限を体感しよう',
      content:
        'スライダーで集合の要素数を変えてみましょう。\n\nどんなに大きくしても有限は有限。「...」が続く無限集合とは本質的に異なります。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'finite-infinite-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-finite',
      title: '有限集合の例',
      content:
        '有限集合は要素を数え尽くせる集合です。\n\n・{1, 2, 3}（3個）\n・日本の都道府県の集合（47個）\n・アルファベットの集合（26個）\n・空集合 ∅（0個）\n\n要素数を自然数で表せるのが有限集合の特徴です。',
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
      id: 'example-infinite',
      title: '無限集合の例',
      content:
        '無限集合は要素が無限にある集合です。\n\n・自然数 ℕ = {1, 2, 3, 4, ...}\n・整数 ℤ = {..., -2, -1, 0, 1, 2, ...}\n・実数 ℝ（数直線上のすべての点）\n・偶数の集合 {2, 4, 6, 8, ...}\n\n驚くべきことに、無限にも「大きさの違い」があります。これは次のチュートリアルで学びます。',
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
      content: '偶数の集合と自然数の集合、どちらが「大きい」？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '偶数の集合と自然数の集合の大きさは？',
        options: [
          { id: 'a', label: '自然数の方が大きい', correct: false },
          { id: 'b', label: '偶数の方が大きい', correct: false },
          { id: 'c', label: '同じ大きさ', correct: true },
          { id: 'd', label: '比較できない', correct: false },
        ],
        explanation:
          '正解は「同じ大きさ」です！\n\n直感に反しますが、n → 2n という対応で自然数と偶数は1対1に対応します。\n1↔2, 2↔4, 3↔6, ...\n\nこれが無限集合の不思議な性質です。',
      },
    },
    {
      id: 'alternate',
      title: 'デデキントの定義',
      content:
        '実は「無限集合」にはエレガントな定義があります。\n\nデデキントの定義：自分自身の真部分集合と1対1対応がつく集合が無限集合。\n\n自然数と偶数の例がまさにこれです。自然数の一部（偶数）と全体（自然数）が同じ大きさ。\n\n有限集合では絶対に起こらない現象です。「部分が全体と同じ大きさ」── これが無限の本質です。',
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
        '有限集合と無限集合：\n\n・有限集合：要素を数え尽くせる\n・無限集合：要素が無限にある\n・無限集合は真部分集合と同じ大きさになりうる\n・無限にも大きさの違いがある\n\n次は「可算無限」── 数え上げられる無限を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'finite-infinite-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
