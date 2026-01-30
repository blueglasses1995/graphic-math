import { Tutorial } from '../types';

export const abelianNonabelianTutorial: Tutorial = {
  id: 'abelian-nonabelian',
  title: '可換群と非可換群',
  description: '演算の順序が結果に影響するかどうかの違いを学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '順序は大事？',
      content:
        '3 + 5 = 5 + 3。足し算では順序は関係ありません。\n\nしかし、靴下を履いてから靴を履くのと、靴を履いてから靴下を履くのは全く違います。\n\n数学でも、順序が関係ある演算と関係ない演算があります。\n\nこの違いが「可換群」と「非可換群」です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'abelian-nonabelian-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'abelian-definition',
      title: '可換群（アーベル群）',
      content:
        '群 (G, ∗) が可換（アーベル群）であるとは:\n\n任意の a, b ∈ G に対して a ∗ b = b ∗ a\n\n例:\n  (ℤ, +): 可換群\n  (ℤ/nℤ, +): 可換群\n  すべての巡回群: 可換群\n\n名前の由来: ノルウェーの数学者アーベル（Abel）に因みます。',
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
      id: 'nonabelian-example',
      title: '非可換群の例',
      content:
        'S₃ は非可換群です。具体的に確認しましょう。\n\nσ = (1 2), τ = (1 3) とすると:\n\nσ∘τ: 1→3→3, 2→2→1, 3→1→2 → 結果: (1 3 2)\nτ∘σ: 1→2→2, 2→1→3, 3→3→1 → 結果: (1 2 3)\n\nσ∘τ ≠ τ∘σ！\n\n置換の合成は一般に非可換です。',
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
      id: 'commutator',
      title: '交換子',
      content:
        '非可換性を測る道具が「交換子」です。\n\n[a, b] = a⁻¹b⁻¹ab\n\n可換なら [a, b] = e です。\n\n交換子が e からどれだけ離れているかで、「どのくらい非可換か」がわかります。\n\nすべての交換子が生成する群を「交換子群」と呼び、群の非可換性を測る重要な道具です。',
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
      id: 'importance',
      title: 'なぜ非可換が重要か',
      content:
        '非可換群は自然界に深く関わっています:\n\n物理学: 回転群 SO(3) は非可換\n  → 3次元の回転は順序に依存する\n\n量子力学: ハイゼンベルク群は非可換\n  → 不確定性原理の数学的背景\n\n暗号理論: 非可換群の困難な問題を利用\n\n非可換性は「複雑さ」の源であり、豊かな理論を生み出します。',
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
      content: '可換・非可換について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち非可換群はどれですか？',
        options: [
          { id: 'a', label: 'ℤ/5ℤ', correct: false },
          { id: 'b', label: 'C₆（位数6の巡回群）', correct: false },
          { id: 'c', label: 'GL₂(ℝ)（2×2正則行列群）', correct: true },
          { id: 'd', label: '(ℝ, +)', correct: false },
        ],
        explanation:
          '正解は GL₂(ℝ) です。行列の掛け算は一般に AB ≠ BA なので非可換群です。他はすべて可換群です。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '可換群と非可換群:\n\n1. 可換群（アーベル群）: a ∗ b = b ∗ a が常に成立\n2. 非可換群: 順序が結果に影響する\n3. 交換子 [a, b] で非可換性を測定\n4. 非可換群は物理学・暗号理論で重要\n\nここまでで群の基本が揃いました。次は「環」── 2つの演算を持つ構造に進みます。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'abelian-nonabelian-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
