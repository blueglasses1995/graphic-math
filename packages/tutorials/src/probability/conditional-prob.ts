import { Tutorial } from '../types';

export const conditionalProbTutorial: Tutorial = {
  id: 'conditional-prob',
  title: '条件付き確率',
  description: '情報が与えられたとき確率がどう変わるかを理解する',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '情報で確率が変わる',
      content:
        'サイコロで偶数が出たと分かったとき、6である確率は？全体6通りが3通りに絞られるので 1/3 です。新しい情報は確率を変えます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: '条件付き確率の定義',
      content:
        '事象Bが起こったという条件のもとで、事象Aが起こる確率:\n\nP(A|B) = P(A ∩ B) / P(B)\n\nBが起こったことで標本空間がBに縮小し、その中でのAの割合が条件付き確率です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example',
      title: '具体例',
      content:
        'トランプから1枚引く。赤いカードだったとき、ハートである確率は？\n\nB = 赤いカード (26枚)\nA = ハート (13枚)\nA ∩ B = ハート (13枚)\n\nP(A|B) = (13/52) / (26/52) = 13/26 = 1/2',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '条件を変えてみよう',
      content:
        '条件（与えられる情報）を変えると、確率がどう変わるか観察しましょう。情報が多いほど、確率は0か1に近づきます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '2つのサイコロの合計が8以上のとき、合計が10である確率は？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '2つのサイコロの合計が8以上のとき、合計が10である確率は？',
        options: [
          { id: 'a', label: '3/15', correct: true },
          { id: 'b', label: '3/36', correct: false },
          { id: 'c', label: '1/6', correct: false },
          { id: 'd', label: '6/36', correct: false },
        ],
        explanation:
          '合計8以上: 8(5通り)+9(4通り)+10(3通り)+11(2通り)+12(1通り)=15通り。合計10は3通り。よって3/15 = 1/5。',
      },
    },
    {
      id: 'multiplication',
      title: '乗法定理',
      content:
        '条件付き確率の定義を変形すると:\n\nP(A ∩ B) = P(B) × P(A|B)\n\n「BかつA」の確率は「Bの確率」×「Bのもとでのa確率」。これを乗法定理と呼びます。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '条件付き確率は情報による確率の更新。\n\n• P(A|B) = P(A∩B) / P(B)\n• 新しい情報で標本空間が縮小する\n• 乗法定理: P(A∩B) = P(B)P(A|B)\n\nベイズの定理の基礎となる重要な概念です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
