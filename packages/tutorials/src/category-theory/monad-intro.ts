import { Tutorial } from '../types';

export const monadIntroTutorial: Tutorial = {
  id: 'monad-intro',
  title: 'モナドとは',
  category: 'category-theory',
  description: 'モナドの圏論的定義と直感的意味を学ぶ',
  steps: [
    {
      id: 'hook',
      title: '構造を包む',
      stepType: 'animation',
      content: 'モナドは「構造を包む」操作とその合成規則を形式化したものです。随伴関手から自然に生まれるこの概念がどう機能するかをアニメーションで見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'monad-intro-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: 'モナドの演算を体験',
      stepType: 'interactive',
      content: 'モナド (T, η, μ) の単位 η: Id→T と乗法 μ: T²→T の動きを視覚的に体験しましょう。μ∘Tη = id = μ∘ηT（単位律）と μ∘Tμ = μ∘μT（結合律）を確認できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'monad-intro-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: 'モナドの定義',
      stepType: 'explanation',
      content: '圏C上のモナドは三つ組 (T, η, μ) です。T: C→C は自己関手、η: Id_C→T は単位（自然変換）、μ: T∘T→T は乗法（自然変換）で、結合律 μ∘Tμ = μ∘μT と単位律 μ∘Tη = id_T = μ∘ηT を満たします。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '随伴からモナドへ',
      stepType: 'explanation',
      content: '随伴 F ⊣ G から T = G∘F とすると、単位 η: Id→GF と乗法 μ = GεF: GFGF→GF（εは余単位）により (T, η, μ) はモナドになります。例：自由群関手と忘却関手の随伴からモナドが生まれます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: 'モナドの理解を確認',
      stepType: 'quiz',
      content: 'モナドの構成要素について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: 'モナド (T, η, μ) の μ が満たすべき法則は？',
        options: [
          { id: 'a', label: 'μ∘μ = id', correct: false },
          { id: 'b', label: 'μ∘Tμ = μ∘μT（結合律）', correct: true },
          { id: 'c', label: 'μ∘η = T', correct: false },
          { id: 'd', label: 'μ = T∘T', correct: false }
        ],
        explanation: 'モナドの乗法μは結合律 μ∘Tμ = μ∘μT を満たす必要があります。これはモノイドの結合律の圏論的一般化です。'
      }
    },
    {
      id: 'alternate',
      title: 'モナドの代数',
      stepType: 'explanation',
      content: 'モナド (T, η, μ) のアイレンベルク・ムーア代数は、対象Aと構造射 a: T(A)→A の組で、a∘η_A = id_A かつ a∘μ_A = a∘T(a) を満たすものです。これはモナドの「表現」を与え、随伴の分解に用いられます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：モナドの意義',
      stepType: 'interactive',
      content: 'モナドは随伴関手から生まれる自己関手上のモノイド構造です。代数学（自由代数）、位相空間論（コンパクト化）、プログラミング（副作用の管理）など幅広い応用を持ちます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'monad-intro-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
