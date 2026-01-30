import { Tutorial } from '../types';

export const productCoproductTutorial: Tutorial = {
  id: 'product-coproduct',
  title: '積と余積',
  category: 'category-theory',
  description: '圏論的積（直積）と余積（直和）の普遍性を学ぶ',
  steps: [
    {
      id: 'hook',
      title: '対象を組み合わせる',
      stepType: 'animation',
      content: '2つの対象AとBから「積」A×Bと「余積」A+Bを構成できます。射影と入射の関係をアニメーションで見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'product-coproduct-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '積の普遍性を体験',
      stepType: 'interactive',
      content: '対象Xから A と B への射 f, g が与えられたとき、X から A×B への一意な射⟨f,g⟩がどう定まるかを体験しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'product-coproduct-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '圏論的積',
      stepType: 'explanation',
      content: 'A×Bは射影 π₁: A×B→A, π₂: A×B→B を持ち、次の普遍性を満たします：任意の X→A（射f）と X→B（射g）に対して、π₁∘h=f かつ π₂∘h=g となる一意の h: X→A×B が存在する。集合の圏では直積集合に対応します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '圏論的余積',
      stepType: 'explanation',
      content: 'A+Bは入射 ι₁: A→A+B, ι₂: B→A+B を持ち、積の双対です：任意の A→X（射f）と B→X（射g）に対して、h∘ι₁=f かつ h∘ι₂=g となる一意の h: A+B→X が存在する。集合の圏では直和（非交和）に対応します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '積の普遍性を確認',
      stepType: 'quiz',
      content: '圏論的積の普遍性について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '積A×Bの普遍性で保証される一意な射はどれですか？',
        options: [
          { id: 'a', label: 'A→B', correct: false },
          { id: 'b', label: 'A×B→X', correct: false },
          { id: 'c', label: 'X→A×B（射影と整合する射）', correct: true },
          { id: 'd', label: 'A→A×B', correct: false }
        ],
        explanation: '積の普遍性は、Xから各因子A,Bへの射が与えられたとき、射影と整合するX→A×Bの一意な射の存在を保証します。'
      }
    },
    {
      id: 'alternate',
      title: 'プログラミングとの対応',
      stepType: 'explanation',
      content: '積はタプル型（Pair型）に、余積は直和型（Either型、Union型）に対応します。TypeScriptでは積は [A, B] や {a: A, b: B}、余積は A | B に対応します。関数型プログラミングでは代数的データ型として活用されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：積と余積の双対性',
      stepType: 'interactive',
      content: '積と余積は双対の概念です。積は射影により因子を取り出し、余積は入射により因子を埋め込みます。普遍性による特徴づけは、圏論の最も強力なツールの一つです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'product-coproduct-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
