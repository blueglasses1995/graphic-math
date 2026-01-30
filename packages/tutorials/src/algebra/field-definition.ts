import { Tutorial } from '../types';

export const fieldDefinitionTutorial: Tutorial = {
  id: 'field-definition',
  title: '体の定義',
  description: '四則演算が自由にできる代数構造「体」を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '割り算もできる世界',
      content:
        '整数では割り算が自由にできません（1÷2 は整数でない）。\n\n有理数 ℚ や実数 ℝ なら、0 以外で自由に割り算ができます。\n\nこの「四則演算が自由にできる」構造が「体（field）」です。\n\n体は代数構造の中でも最も完成された形です。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'field-definition-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: '体の公理',
      content:
        '体 (F, +, ×) の公理:\n\n1. (F, +) は可換群（加法群、単位元 0）\n2. (F \\ {0}, ×) は可換群（乗法群、単位元 1）\n3. 分配法則が成り立つ\n4. 0 ≠ 1\n\nつまり: 環であって、0 以外のすべての要素が掛け算の逆元（逆数）を持つもの。',
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
      id: 'examples',
      title: '体の例',
      content:
        '無限体:\n  ℚ（有理数体）── 最小の数の体\n  ℝ（実数体）── 連続な数の体\n  ℂ（複素数体）── 代数的に閉じた体\n\n有限体:\n  ℤ/pℤ（p は素数）── 有限体の基本例\n  GF(4), GF(8), ...（素数べき位数の有限体）\n\n体でない例:\n  ℤ（整数）── 逆数がない\n  ℤ/6ℤ ── 零因子がある',
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
      id: 'no-zero-divisors',
      title: '体には零因子がない',
      content:
        '体では ab = 0 ならば a = 0 または b = 0 です。\n\n証明: a ≠ 0 なら a⁻¹ が存在\n  ab = 0 の両辺に a⁻¹ を掛けると\n  b = a⁻¹ × 0 = 0\n\nこれが ℤ/6ℤ が体でない理由:\n  2 × 3 = 0 だが 2 ≠ 0 かつ 3 ≠ 0\n\n体は整域の特別な場合です。',
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
      id: 'field-extensions',
      title: '体の拡大',
      content:
        '体を「拡大」することで、新しい数を追加できます。\n\nℚ → ℚ(√2) = {a + b√2 | a, b ∈ ℚ}\n  √2 を追加した最小の体\n\nℝ → ℂ = {a + bi | a, b ∈ ℝ}\n  i（虚数単位）を追加した体\n\n体の拡大は方程式の解の存在と深く関わっています。\n\nx² - 2 = 0 の解は ℚ にないが ℚ(√2) にはある。',
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
      content: '体について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち体はどれですか？',
        options: [
          { id: 'a', label: 'ℤ（整数）', correct: false },
          { id: 'b', label: 'ℤ/4ℤ', correct: false },
          { id: 'c', label: 'ℤ/7ℤ', correct: true },
          { id: 'd', label: 'ℤ/9ℤ', correct: false },
        ],
        explanation:
          '正解は ℤ/7ℤ です。7 は素数なので ℤ/7ℤ は体です。4 = 2², 9 = 3² は素数でないので ℤ/4ℤ, ℤ/9ℤ には零因子があり体ではありません。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '体のポイント:\n\n1. 加法群 + 乗法群（0以外）+ 分配法則\n2. 四則演算が自由にできる\n3. 零因子が存在しない\n4. 体の拡大: 新しい数を追加\n5. ℤ/pℤ は素数 p で体になる\n\n次は「有限体」── 要素が有限個の体を詳しく学びましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'field-definition-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
