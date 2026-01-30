import { Tutorial } from '../types';

export const intersectionTutorial: Tutorial = {
  id: 'intersection',
  title: '共通部分',
  description: '2つの集合の重なり（∩）を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '重なる部分',
      content:
        '2つの円が重なっています。\n\n重なった部分がハイライトされています。この領域が「共通部分」です。\n\n「両方に属するもの」だけを集めた集合です。',
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
      title: '共通部分を見つけよう',
      content:
        '要素を2つの集合に自由に配置して、共通部分がどう変わるか観察しましょう。\n\n両方の円に入っている要素だけが共通部分になります。',
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
      title: '共通部分の基本',
      content:
        'A = {1, 2, 3, 4}, B = {3, 4, 5, 6} のとき：\n\nA ∩ B = {3, 4}\n\n「Aに属し、かつBにも属する」要素を集めます。\n\n∩ は「インターセクション」と読み、「かつ（AND）」に対応します。',
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
      id: 'example-disjoint',
      title: '互いに素な集合',
      content:
        'A = {1, 2}, B = {3, 4} のとき：\n\nA ∩ B = ∅（空集合）\n\n共通の要素がないとき、AとBは「互いに素（disjoint）」といいます。\n\nベン図では2つの円がまったく重ならない状態です。',
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
      content: '偶数の集合と3の倍数の集合の共通部分は？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '偶数の集合 ∩ 3の倍数の集合 = ?',
        options: [
          { id: 'a', label: '2の倍数', correct: false },
          { id: 'b', label: '3の倍数', correct: false },
          { id: 'c', label: '6の倍数', correct: true },
          { id: 'd', label: '5の倍数', correct: false },
        ],
        explanation:
          '正解は6の倍数です。\n\n偶数（2の倍数）かつ3の倍数である数は、6の倍数です。例: 6, 12, 18, ...\n\nこれは最小公倍数の概念と繋がっています。',
      },
    },
    {
      id: 'alternate',
      title: '分配法則',
      content:
        '和集合と共通部分には分配法則が成り立ちます。\n\nA ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)\nA ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)\n\nこれは数の掛け算と足し算の分配法則 a×(b+c) = a×b + a×c に似ています。\n\n∩ が「掛け算的」、∪ が「足し算的」と見ると覚えやすいです。',
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
        '共通部分のポイント：\n\n・A ∩ B = 「AかつBに属する要素」の集合\n・共通要素がなければ A ∩ B = ∅（互いに素）\n・論理の AND に対応\n・和集合との間に分配法則が成り立つ\n\n次は「差集合」── 一方にだけ属する要素を学びます。',
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
