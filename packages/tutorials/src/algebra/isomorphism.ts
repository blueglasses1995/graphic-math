import { Tutorial } from '../types';

export const isomorphismTutorial: Tutorial = {
  id: 'isomorphism',
  title: '同型',
  description: '構造が完全に同じ群の概念を理解する',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '見た目は違うが中身は同じ',
      content:
        '三角形の回転群 {e, r, r²} と mod 3 の整数 {0, 1, 2}。\n\n見た目は全く違いますが、計算の構造は完全に同じでした。\n\nこの「構造が同じ」を正確に表す概念が「同型」です。\n\n同型は、代数学で最も重要な概念の一つです。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'isomorphism-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'definition',
      title: '同型の定義',
      content:
        '準同型写像 φ: G → H が「同型写像」であるとは:\n\nφ が全単射（1対1かつ上への対応）であること。\n\nG ≅ H（G と H は同型）と書きます。\n\n同型な群は、要素の「名前」が違うだけで、構造は完全に同じです。\n\n群論では、同型な群を「本質的に同じ」とみなします。',
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
      title: '同型の例',
      content:
        '例1: C₃ ≅ ℤ/3ℤ\n  r ↔ 1, r² ↔ 2, e ↔ 0\n\n例2: (ℝ, +) ≅ (ℝ⁺, ×)\n  φ(x) = eˣ（指数関数）\n  φ(a + b) = eᵃ⁺ᵇ = eᵃ · eᵇ = φ(a) · φ(b) ✓\n\n足し算の世界と掛け算の世界が同型！\n\nこれが「対数」の本質的な意味です。',
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
      id: 'invariants',
      title: '同型不変量',
      content:
        '同型な群は同じ性質を共有します:\n\n  位数（要素の数）\n  可換性（アーベル群かどうか）\n  部分群の構造\n  要素の位数の分布\n\nこれらを「同型不変量」と呼びます。\n\n逆に、不変量が違えば同型でないことがわかります。\n例: |G| ≠ |H| ならば G ≇ H',
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
      id: 'first-isomorphism',
      title: '第一同型定理',
      content:
        '群論で最も重要な定理の一つ:\n\n準同型 φ: G → H に対して:\n  G / ker(φ) ≅ im(φ)\n\n「G を核で割った群」は「像」と同型です。\n\n例: φ: ℤ → ℤ/3ℤ, φ(n) = n mod 3\n  ker(φ) = 3ℤ\n  ℤ / 3ℤ ≅ ℤ/3ℤ ✓（当たり前に見えますが一般的な定理です）',
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
      content: '同型について確認しましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち ℤ/4ℤ と同型でないものはどれですか？',
        options: [
          { id: 'a', label: 'C₄（位数4の巡回群）', correct: false },
          { id: 'b', label: '{1, i, -1, -i}（複素数の掛け算）', correct: false },
          { id: 'c', label: 'クラインの四元群 V₄', correct: true },
          { id: 'd', label: '4次の回転群', correct: false },
        ],
        explanation:
          '正解はクラインの四元群 V₄ です。V₄ のすべての非単位元の位数は2ですが、ℤ/4ℤ には位数4の要素があります。位数の分布が異なるので同型ではありません。',
      },
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '同型のポイント:\n\n1. 全単射な準同型写像が同型写像\n2. G ≅ H は「構造が完全に同じ」\n3. 同型不変量: 位数、可換性、部分群の構造\n4. 第一同型定理: G/ker(φ) ≅ im(φ)\n\n同型の概念により、「名前」を超えて構造の本質を捉えられます。\n\n次は「可換群と非可換群」の違いを学びましょう。',
      sceneConfig: {
        showGrid: true,
        showAxes: true,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'isomorphism-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
