import { Tutorial } from '../types';

export const symmetricGroupTutorial: Tutorial = {
  id: 'symmetric-group',
  title: '対称群',
  description: 'n個の要素の置換が作る群を理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '並べ替えの群',
      content:
        '3人の生徒 A, B, C の席替えを考えましょう。\n\n可能な並び順:\n  ABC, ACB, BAC, BCA, CAB, CBA\n\n全部で 3! = 6 通りです。\n\nこの「並べ替え」を正式には「置換」と呼び、置換全体の集合は「対称群」S₃ になります。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'symmetric-group-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'permutation-notation',
      title: '置換の記法',
      content:
        '置換は「どこに何が移るか」で表します。\n\nσ = (1 2 3) → (2 3 1) は:\n  1 → 2, 2 → 3, 3 → 1\n\n巡回記法では (1 2 3) と書きます。\n  1 → 2 → 3 → 1 のサイクル\n\n恒等置換 e: すべてそのまま\n互換 (1 2): 1 と 2 だけ入れ替え',
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
      id: 'composition',
      title: '置換の合成',
      content:
        '2つの置換を続けて行う「合成」が群の演算です。\n\nσ = (1 2), τ = (2 3) のとき:\n\nσ∘τ: まず τ を適用、次に σ を適用\n  1 →τ 1 →σ 2  → 結果: 1→2\n  2 →τ 3 →σ 3  → 結果: 2→3\n  3 →τ 2 →σ 1  → 結果: 3→1\n\nσ∘τ = (1 2 3)\n\n重要: τ∘σ ≠ σ∘τ（非可換！）',
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
      id: 's3-structure',
      title: 'S₃ の構造',
      content:
        'S₃ は6つの要素を持ちます（|S₃| = 3! = 6）:\n\n  e: 恒等置換\n  (1 2 3): 120°回転に対応\n  (1 3 2): 240°回転に対応\n  (1 2): 反射に対応\n  (1 3): 反射に対応\n  (2 3): 反射に対応\n\nこれは正三角形の対称性の群（二面体群 D₃）と同じです！',
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
      id: 'cayley-theorem',
      title: 'ケイリーの定理',
      content:
        '驚くべき定理: すべての有限群は、ある対称群の部分群と同型である。\n\nつまり、どんな有限群も「並べ替え」で表現できるのです。\n\n対称群は「群の群」とも言える、最も一般的な群です。\n\nSₙ の位数は n! で、n が大きくなると急激に増大します。',
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
      content: '対称群について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'S₄（4つの要素の対称群）の位数はいくつですか？',
        options: [
          { id: 'a', label: '4', correct: false },
          { id: 'b', label: '8', correct: false },
          { id: 'c', label: '16', correct: false },
          { id: 'd', label: '24', correct: true },
        ],
        explanation:
          '正解は 24 です。S₄ の位数は 4! = 4 × 3 × 2 × 1 = 24 です。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '対称群のポイント:\n\n1. Sₙ は n 個の要素の置換全体の群\n2. |Sₙ| = n!（要素数は n の階乗）\n3. n ≥ 3 のとき非可換\n4. ケイリーの定理: すべての有限群は Sₙ の部分群\n\n対称群は群論において中心的な役割を果たします。\n\n次は「部分群」── 群の中の小さな群を学びましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'symmetric-group-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
