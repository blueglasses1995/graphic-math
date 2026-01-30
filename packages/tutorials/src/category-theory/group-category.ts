import { Tutorial } from '../types';

export const groupCategoryTutorial: Tutorial = {
  id: 'group-category',
  title: '群の圏',
  category: 'category-theory',
  description: '群を対象、準同型を射とする圏Grpの構造を学ぶ',
  steps: [
    {
      id: 'hook',
      title: '群と準同型の世界',
      stepType: 'animation',
      content: '群を対象、群準同型を射とする圏Grpは代数学の中心的な圏です。忘却関手と自由関手がSetとの間に美しい随伴を形成する様子をアニメーションで見ましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'group-category-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '群準同型を構成',
      stepType: 'interactive',
      content: '具体的な群（整数加法群ℤ、巡回群ℤ/nℤ、対称群S_n）の間の準同型を構成してみましょう。準同型が群演算を保存することを確認できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'group-category-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: 'Grpの構造',
      stepType: 'explanation',
      content: 'Grpの対象は群、射は群準同型（演算を保存する写像）です。始対象と終対象はともに自明な群{e}（ゼロ対象）です。積は群の直積、余積は自由積（アマルガム）です。Grpはアーベル圏ではありません。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '自由関手と忘却関手',
      stepType: 'explanation',
      content: '忘却関手 U: Grp→Set は群を台集合に移します。自由関手 F: Set→Grp は集合Xを自由群F(X)に移します。F ⊣ U は随伴であり、Hom_Grp(F(X), G) ≅ Hom_Set(X, U(G)) が成り立ちます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: 'Grpの性質を確認',
      stepType: 'quiz',
      content: '群の圏について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '群の圏Grpのゼロ対象（始対象かつ終対象）は？',
        options: [
          { id: 'a', label: '整数加法群ℤ', correct: false },
          { id: 'b', label: '自明な群{e}', correct: true },
          { id: 'c', label: '対称群S₃', correct: false },
          { id: 'd', label: '群は存在しない', correct: false }
        ],
        explanation: '自明な群{e}は始対象かつ終対象（ゼロ対象）です。任意の群Gに対して{e}→Gも G→{e}もちょうど1つの準同型が存在します。'
      }
    },
    {
      id: 'alternate',
      title: 'アーベル群の圏',
      stepType: 'explanation',
      content: 'アーベル群の圏Abは、Grpの充満部分圏でありかつアーベル圏です。Hom集合がアーベル群の構造を持ち、核・余核が存在し、完全列の理論が展開できます。Abはℤ-加群の圏ℤ-Modと同値です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：代数の圏論',
      stepType: 'interactive',
      content: '群の圏Grpは代数学を圏論的に捉える典型例です。忘却・自由の随伴は代数構造の「自由構成」を統一的に理解する鍵です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'group-category-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
