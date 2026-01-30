import { Tutorial } from '../types';

export const directProductTutorial: Tutorial = {
  id: 'direct-product',
  title: '群の直積',
  description: '複数の群を組み合わせて新しい群を構成する直積を学ぶ',
  category: 'algebra',
  steps: [
    {
      id: 'hook',
      title: '群を組み合わせる',
      content:
        '時計の短針と長針を考えてみましょう。\n\n短針は12通り、長針は60通りの位置を取ります。\n両方を組み合わせると 12 × 60 = 720 通り。\n\nこのように2つの群を「組み合わせる」操作が直積です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '直積群の演算を体験',
      content:
        'Z₂ × Z₃ の元は (0,0), (0,1), (0,2), (1,0), (1,1), (1,2) の6個です。\n\n演算は成分ごと: (a,b) + (c,d) = (a+c mod 2, b+d mod 2)。\n\n要素を選んで足し算の結果を確かめてみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
    {
      id: 'example-1',
      title: '直積の定義',
      content:
        '群 G₁, G₂ の直積 G₁ × G₂ は:\n\n集合: {(g₁, g₂) | g₁ ∈ G₁, g₂ ∈ G₂}\n演算: (g₁, g₂)(h₁, h₂) = (g₁h₁, g₂h₂)\n単位元: (e₁, e₂)\n逆元: (g₁, g₂)⁻¹ = (g₁⁻¹, g₂⁻¹)\n\n位数: |G₁ × G₂| = |G₁| · |G₂|',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-2',
      title: '中国剰余定理との関連',
      content:
        'gcd(m, n) = 1 のとき:\n\nZ_{mn} ≅ Z_m × Z_n\n\n例: Z₆ ≅ Z₂ × Z₃（2と3は互いに素）\n\nしかし Z₄ ≇ Z₂ × Z₂\n（Z₄は巡回群だが Z₂ × Z₂ は巡回群ではない）\n\n直積で分解できるかどうかが群の構造を決めます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '確認クイズ',
      content: '直積群について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'Z₂ × Z₂ は巡回群ですか？',
        options: [
          { id: 'a', label: 'はい、位数4の巡回群', correct: false },
          { id: 'b', label: 'いいえ、クライン四元群', correct: true },
          { id: 'c', label: 'はい、Z₄と同型', correct: false },
          { id: 'd', label: '群ではない', correct: false },
        ],
        explanation:
          'Z₂ × Z₂ のすべての元は位数1か2です。位数4の元が存在しないため巡回群ではなく、クライン四元群 V₄ と呼ばれます。',
      },
    },
    {
      id: 'alternate',
      title: '有限アーベル群の基本定理',
      content:
        '有限アーベル群の基本定理:\n\nすべての有限アーベル群は巡回群の直積に分解できる。\n\n例: 位数12のアーベル群は\nZ₁₂ ≅ Z₄ × Z₃  または  Z₂ × Z₂ × Z₃\nの2種類のみ。\n\nこの定理により有限アーベル群は完全に分類されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ：直積で群を構築',
      content:
        '直積 G₁ × G₂ は:\n\n• 成分ごとの演算で新しい群を構成\n• |G₁ × G₂| = |G₁| · |G₂|\n• 中国剰余定理と深く関連\n• 有限アーベル群は巡回群の直積に分解可能\n\n群の構造を理解する上で不可欠な構成法です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
      stepType: 'interactive',
    },
  ],
};
