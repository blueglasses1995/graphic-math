import { Tutorial } from '../types';

export const homomorphismTutorial: Tutorial = {
  id: 'homomorphism',
  title: '準同型写像',
  description: '群の構造を保つ写像を理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '構造を保つ関数',
      content:
        '2つの群 (G, ∗) と (H, ∘) をつなぐ関数 φ: G → H を考えます。\n\nこの関数が「構造を保つ」とは:\n  φ(a ∗ b) = φ(a) ∘ φ(b)\n\nG での演算結果を H に写しても、H での演算結果と同じになる。\n\nこのような φ を「準同型写像（homomorphism）」と呼びます。',
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
      id: 'example',
      title: '準同型の例',
      content:
        '例1: φ: ℤ → ℤ/3ℤ, φ(n) = n mod 3\n  φ(2 + 5) = φ(7) = 1\n  φ(2) + φ(5) = 2 + 2 = 4 ≡ 1 (mod 3) ✓\n\n例2: φ: ℝ* → ℝ*, φ(x) = |x|（絶対値）\n  φ((-3) × (-2)) = φ(6) = 6\n  φ(-3) × φ(-2) = 3 × 2 = 6 ✓\n\nどちらも「演算の順序を保つ」という条件を満たしています。',
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
      id: 'properties',
      title: '準同型の性質',
      content:
        '準同型写像 φ: G → H は以下を満たします:\n\n1. φ(eG) = eH（単位元は単位元に移る）\n2. φ(a⁻¹) = φ(a)⁻¹（逆元は逆元に移る）\n\nこれらは定義から自動的に導かれます。\n\nつまり、構造を保つ関数は「特別な要素」も正しく保存します。',
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
      id: 'kernel',
      title: '核（カーネル）',
      content:
        '準同型 φ: G → H の「核」:\n  ker(φ) = { a ∈ G | φ(a) = eH }\n\n核は「H の単位元に移る G の要素の集合」です。\n\n重要な性質:\n  ker(φ) は G の部分群\n  ker(φ) = {eG} ⟺ φ は単射（1対1）\n\n核が大きいほど、φ は多くの情報を「潰して」います。',
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
      id: 'image',
      title: '像',
      content:
        '準同型 φ: G → H の「像」:\n  im(φ) = { φ(a) | a ∈ G }\n\n像は φ で到達できる H の要素の集合です。\n\nim(φ) は H の部分群になります。\n\nim(φ) = H ⟺ φ は全射（上への写像）\n\n核と像で、準同型の「情報の流れ」が完全に記述されます。',
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
      content: '準同型について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'φ: ℤ → ℤ/4ℤ, φ(n) = n mod 4 の核はどれですか？',
        options: [
          { id: 'a', label: '{0}', correct: false },
          { id: 'b', label: '{0, 4}', correct: false },
          { id: 'c', label: '4ℤ = {..., -8, -4, 0, 4, 8, ...}', correct: true },
          { id: 'd', label: 'ℤ 全体', correct: false },
        ],
        explanation:
          '正解は 4ℤ です。φ(n) = 0 となるのは 4 の倍数全体 {..., -8, -4, 0, 4, 8, ...} です。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '準同型写像のポイント:\n\n1. φ(a ∗ b) = φ(a) ∘ φ(b) が定義\n2. 単位元と逆元を保存する\n3. 核 ker(φ): 単位元に移る要素の集合\n4. 像 im(φ): 到達可能な要素の集合\n5. 核が自明 ⟺ 単射、像が全体 ⟺ 全射\n\n次は「同型」── 完全に同じ構造を持つ群を学びましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
