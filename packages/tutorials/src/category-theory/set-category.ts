import { Tutorial } from '../types';

export const setCategoryTutorial: Tutorial = {
  id: 'set-category',
  title: '集合の圏',
  category: 'category-theory',
  description: '最も基本的な圏Setの構造と性質を詳しく学ぶ',
  steps: [
    {
      id: 'hook',
      title: '集合と写像の世界',
      stepType: 'animation',
      content: '集合を対象、写像を射とする圏Setは、圏論の原型です。始対象（空集合）、終対象（一点集合）、積（直積）、余積（非交和）がすべて揃う豊かな圏をアニメーションで探検しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: 'Setの構成を体験',
      stepType: 'interactive',
      content: '集合の直積、非交和、べき集合を視覚的に構成してみましょう。積の射影や余積の入射がどう機能するかを確認できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: 'Setの基本性質',
      stepType: 'explanation',
      content: 'Setは完備かつ余完備（すべての小さな極限と余極限を持つ）、カルテシアン閉（指数対象 B^A = Hom(A,B) が存在）、集合の圏はトポスの典型例です。モノ射は単射、エピ射は全射と一致します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '部分対象と冪対象',
      stepType: 'explanation',
      content: 'Setでは部分対象は部分集合に対応し、部分対象分類子は2元集合 Ω={true, false} です。冪対象（指数対象）B^A は AからBへの写像の集合です。カリー化 Hom(A×B, C) ≅ Hom(A, C^B) が成り立ちます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: 'Setの性質を確認',
      stepType: 'quiz',
      content: '集合の圏Setについて確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '集合の圏Setの終対象はどれですか？',
        options: [
          { id: 'a', label: '空集合∅', correct: false },
          { id: 'b', label: '自然数の集合ℕ', correct: false },
          { id: 'c', label: '一点集合{*}', correct: true },
          { id: 'd', label: '2元集合{0,1}', correct: false }
        ],
        explanation: '一点集合{*}がSetの終対象です。任意の集合Xから{*}への写像はちょうど1つ（すべてを*に送る定値写像）存在します。'
      }
    },
    {
      id: 'alternate',
      title: 'Setとトポス',
      stepType: 'explanation',
      content: 'Setは（初等）トポスの原型です。トポスとは、有限極限を持ち、部分対象分類子を持ち、カルテシアン閉な圏です。層の圏もトポスであり、Set はその「点」と見なせます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：Setから始まる',
      stepType: 'interactive',
      content: '集合の圏Setは圏論の出発点であり、多くの概念の「具体例」を提供します。Setの性質を一般化することで、トポスやアーベル圏など豊かな圏論的構造が生まれます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
