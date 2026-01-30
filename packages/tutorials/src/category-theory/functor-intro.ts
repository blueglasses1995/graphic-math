import { Tutorial } from '../types';

export const functorIntroTutorial: Tutorial = {
  id: 'functor-intro',
  title: '関手とは',
  category: 'category-theory',
  description: '圏から圏への構造保存写像「関手」を理解する',
  steps: [
    {
      id: 'hook',
      title: '圏の間の写像',
      stepType: 'animation',
      content: '関手Fは圏Cから圏Dへの「構造を保つ」写像です。対象を対象に、射を射に移し、合成と恒等射を保存します。2つの圏の対応関係をアニメーションで見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'functor-intro-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '関手の動きを体験',
      stepType: 'interactive',
      content: '圏Cの対象と射を選ぶと、関手Fによる像が圏Dに表示されます。合成の保存 F(g∘f) = F(g)∘F(f) を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'functor-intro-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '関手の定義',
      stepType: 'explanation',
      content: '関手 F: C→D は次を満たします：(1) 各対象AにF(A)を対応させる、(2) 各射f: A→Bに F(f): F(A)→F(B) を対応させる、(3) F(g∘f) = F(g)∘F(f)（合成の保存）、(4) F(id_A) = id_{F(A)}（恒等射の保存）。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '関手の例',
      stepType: 'explanation',
      content: '忘却関手：群の圏Grpから集合の圏Setへ、群を台集合に移す関手。自由関手：SetからGrpへ、集合を自由群に移す関手。べき集合関手：SetからSetへ、集合Aをべき集合P(A)に移す関手。これらは数学の至る所に現れます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '関手の性質を確認',
      stepType: 'quiz',
      content: '関手の定義について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '関手が保存しなければならないものはどれですか？',
        options: [
          { id: 'a', label: '対象の数', correct: false },
          { id: 'b', label: '射の合成と恒等射', correct: true },
          { id: 'c', label: '射の全単射性', correct: false },
          { id: 'd', label: '圏の大きさ', correct: false }
        ],
        explanation: '関手の核心は構造保存です。F(g∘f) = F(g)∘F(f)（合成の保存）と F(id_A) = id_{F(A)}（恒等射の保存）が必須条件です。'
      }
    },
    {
      id: 'alternate',
      title: '関手とプログラミング',
      stepType: 'explanation',
      content: 'プログラミングにおけるFunctor（例：HaskellのFunctorクラス、JavaScriptのArray.map）は関手の概念です。fmap（またはmap）が射（関数）を移す部分に対応し、fmap id = id、fmap (g . f) = fmap g . fmap f が関手則です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：関手の世界',
      stepType: 'interactive',
      content: '関手は圏と圏をつなぐ橋です。構造を保存しながら一つの数学的世界を別の世界に翻訳します。自然変換を学ぶことで、関手同士の関係も理解できるようになります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'functor-intro-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
