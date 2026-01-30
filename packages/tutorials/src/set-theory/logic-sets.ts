import { Tutorial } from '../types';

export const logicSetsTutorial: Tutorial = {
  id: 'logic-sets',
  title: '【実践】論理と集合',
  description: '命題論理と集合演算の深い対応関係を理解する',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '論理と集合は双子',
      content:
        '左側に論理式、右側にベン図が表示されています。\n\n論理式を変えると、ベン図の塗り分けも変わります。\n\n論理と集合は同じ構造を持つ「双子」なのです。',
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
      title: '対応を確かめよう',
      content:
        '論理式を入力して、対応するベン図がどうなるか確認しましょう。\n\nAND, OR, NOT が ∩, ∪, ᶜ にどう対応するか体感してください。',
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
      id: 'example-table',
      title: '対応表',
      content:
        '論理 → 集合の対応：\n\n・P ∧ Q（AND） → A ∩ B\n・P ∨ Q（OR） → A ∪ B\n・¬P（NOT） → Aᶜ\n・P → Q（ならば） → A ⊆ B（Aᶜ ∪ B）\n・P ↔ Q（同値） → A = B\n・真（T） → 全体集合 U\n・偽（F） → 空集合 ∅\n\nこの対応を使えば、論理の問題を図で解けます。',
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
      id: 'example-implication',
      title: '「ならば」の集合的意味',
      content:
        'P → Q を集合で表すと A ⊆ B です。\n\n「すべての猫は動物」= 猫の集合 ⊆ 動物の集合\n\n対偶: ¬Q → ¬P は Bᶜ ⊆ Aᶜ\n「動物でないなら猫でない」\n\nベン図で見ると、AがBの中にあるとき、Bの外はAの外に含まれる。\n対偶が成り立つ理由が一目瞭然です。',
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
      title: '練習問題',
      content: '¬(P ∨ Q) → R を集合で表すと？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '¬(P ∨ Q) → R を集合演算で表すと？',
        options: [
          { id: 'a', label: '(A ∪ B)ᶜ ⊆ C', correct: true },
          { id: 'b', label: '(A ∩ B)ᶜ ⊆ C', correct: false },
          { id: 'c', label: 'A ∪ B ⊆ C', correct: false },
          { id: 'd', label: 'Aᶜ ∪ Bᶜ ⊆ C', correct: false },
        ],
        explanation:
          '正解は (A ∪ B)ᶜ ⊆ C です。\n\n¬(P ∨ Q) → ∪の補集合 = (A ∪ B)ᶜ\n→ R → ⊆ C\n\nなお (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ（ド・モルガン）なので Aᶜ ∩ Bᶜ ⊆ C とも書けます。',
      },
    },
    {
      id: 'alternate',
      title: 'ブール代数',
      content:
        '論理と集合の共通構造を抽象化したものがブール代数です。\n\nブール代数の公理:\n・交換法則: a∧b = b∧a, a∨b = b∨a\n・分配法則: a∧(b∨c) = (a∧b)∨(a∧c)\n・補元の存在: a∧aᶜ = 0, a∨aᶜ = 1\n\nこれはデジタル回路設計の基礎です。\nANDゲート = ∩、ORゲート = ∪、NOTゲート = ᶜ',
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
        '論理と集合のポイント：\n\n・AND ↔ ∩、OR ↔ ∪、NOT ↔ ᶜ\n・P→Q ↔ A⊆B\n・対偶が成り立つ理由をベン図で理解\n・ブール代数が共通の抽象構造\n\n次は「無限ホテルのパラドクス」に挑戦します。',
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
