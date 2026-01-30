import { Tutorial } from '../types';

export const deMorganTutorial: Tutorial = {
  id: 'de-morgan',
  title: 'ド・モルガンの法則',
  description: '補集合と和集合・共通部分の関係を表す美しい法則を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: 'NOT を分配する',
      content:
        'ベン図上で2つの集合の和集合が表示され、その補集合が光ります。\n\n次に、それぞれの補集合の共通部分が光ります。\n\n同じ領域が光りました！これがド・モルガンの法則です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
        circles: [{ radius: 1, color: '#42a5f5', plane: 'xy' }, { radius: 1, color: '#ef5350', plane: 'xy' }],
      },
      customScene: 'de-morgan-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '法則を確かめよう',
      content:
        '要素を自由に動かして、ド・モルガンの法則が常に成り立つことを確認しましょう。\n\n左辺と右辺が常に同じ結果になることを観察してください。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'de-morgan-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-law1',
      title: '第1法則',
      content:
        '(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ\n\n「AまたはBの否定」=「Aでなく、かつBでない」\n\n例: A = {1,2}, B = {2,3}, U = {1,2,3,4}\nA ∪ B = {1,2,3} → (A ∪ B)ᶜ = {4}\nAᶜ = {3,4}, Bᶜ = {1,4} → Aᶜ ∩ Bᶜ = {4} ✓\n\n「どちらにも属さない」ものを見つけるには、「それぞれに属さないもの」の共通部分を取ればよいのです。',
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
      id: 'example-law2',
      title: '第2法則',
      content:
        '(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ\n\n「AかつBの否定」=「Aでない、またはBでない」\n\n例: A = {1,2,3}, B = {2,3,4}, U = {1,2,3,4,5}\nA ∩ B = {2,3} → (A ∩ B)ᶜ = {1,4,5}\nAᶜ = {4,5}, Bᶜ = {1,5} → Aᶜ ∪ Bᶜ = {1,4,5} ✓\n\n∪ と ∩ が入れ替わるのがポイントです。',
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
      content: 'ド・モルガンの法則を論理に当てはめると？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '¬(P ∧ Q) はどれと同値？',
        options: [
          { id: 'a', label: '¬P ∧ ¬Q', correct: false },
          { id: 'b', label: '¬P ∨ ¬Q', correct: true },
          { id: 'c', label: 'P ∨ Q', correct: false },
          { id: 'd', label: '¬P ∧ Q', correct: false },
        ],
        explanation:
          '正解は ¬P ∨ ¬Q です。\n\nド・モルガンの法則：否定すると AND と OR が入れ替わります。\n¬(P ∧ Q) = ¬P ∨ ¬Q\n¬(P ∨ Q) = ¬P ∧ ¬Q',
      },
    },
    {
      id: 'alternate',
      title: '日常での例',
      content:
        '「猫も犬も飼っていない」は次のどちらでしょう？\n\n(A) 猫を飼っていない、かつ犬を飼っていない → ¬猫 ∧ ¬犬\n(B) 猫か犬の少なくとも一方を飼っていないわけではない\n\n答えは(A)。これは ¬(猫 ∨ 犬) = ¬猫 ∧ ¬犬 そのものです。\n\n日本語の「〜も〜もない」は ド・モルガンの法則を自然に使っています。',
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
        'ド・モルガンの法則：\n\n・(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ\n・(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ\n\n否定すると ∪ と ∩ が入れ替わる！\n\nプログラミングの条件式や論理回路設計でも頻出の重要法則です。\n\n次は「直積集合」── ペアを作る演算を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'de-morgan-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
