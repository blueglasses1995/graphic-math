import { Tutorial } from '../types';

export const groupDefinitionTutorial: Tutorial = {
  id: 'group-definition',
  title: '群の定義',
  description: '群の4つの公理を正式に学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '群とは何か',
      content:
        'いよいよ代数学の主役「群（group）」を正式に定義します。\n\n群とは、集合 G と演算 ∗ の組 (G, ∗) で、以下の4つの条件を満たすものです。\n\nこの4つの条件を「群の公理」と呼びます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'group-definition-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'axiom-closure',
      title: '公理1: 閉性',
      content:
        '任意の a, b ∈ G に対して、a ∗ b ∈ G\n\n演算の結果が必ず集合 G の中に留まること。\n\n前回学んだ「閉性」そのものです。\n\nこれにより、G の中だけで計算が完結します。',
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
      id: 'axiom-associativity',
      title: '公理2: 結合法則',
      content:
        '任意の a, b, c ∈ G に対して、(a ∗ b) ∗ c = a ∗ (b ∗ c)\n\n3つ以上の要素を計算するとき、括弧の位置を変えても結果が同じ。\n\nこれにより、a ∗ b ∗ c と括弧なしで書いても曖昧になりません。',
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
      id: 'axiom-identity',
      title: '公理3: 単位元の存在',
      content:
        'ある要素 e ∈ G が存在して、任意の a ∈ G に対して:\n  e ∗ a = a ∗ e = a\n\ne は「何もしない操作」に対応します。\n\n足し算なら 0（a + 0 = a）\n掛け算なら 1（a × 1 = a）\n回転なら 0°回転',
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
      id: 'axiom-inverse',
      title: '公理4: 逆元の存在',
      content:
        '任意の a ∈ G に対して、ある a⁻¹ ∈ G が存在して:\n  a ∗ a⁻¹ = a⁻¹ ∗ a = e\n\nすべての操作に「元に戻す操作」が存在すること。\n\n足し算なら -a（a + (-a) = 0）\n回転なら逆回転（120°回転 → 240°回転）\n\nこの4つの公理を満たす (G, ∗) が「群」です。',
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
      id: 'quiz',
      title: '確認クイズ',
      content: '群の公理について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '(ℤ, ×)（整数と掛け算）は群ですか？',
        options: [
          { id: 'a', label: 'はい、群です', correct: false },
          { id: 'b', label: 'いいえ、閉性が成り立たないから', correct: false },
          { id: 'c', label: 'いいえ、逆元が存在しないから', correct: true },
          { id: 'd', label: 'いいえ、結合法則が成り立たないから', correct: false },
        ],
        explanation:
          '正解は「逆元が存在しない」です。例えば 2 の掛け算の逆元は 1/2 ですが、1/2 は整数ではありません。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '群 (G, ∗) の4つの公理:\n\n1. 閉性: a ∗ b ∈ G\n2. 結合法則: (a ∗ b) ∗ c = a ∗ (b ∗ c)\n3. 単位元: e ∗ a = a ∗ e = a\n4. 逆元: a ∗ a⁻¹ = a⁻¹ ∗ a = e\n\nこの4つの条件はシンプルですが、驚くほど豊かな理論が展開されます。\n\n次は「単位元と逆元」をもっと深く理解しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'group-definition-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
