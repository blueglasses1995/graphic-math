import { Tutorial } from '../types';

export const toposIntroTutorial: Tutorial = {
  id: 'topos-intro',
  title: 'トポス入門',
  category: 'category-theory',
  description: 'トポスの基本概念と論理学との関係を学ぶ',
  steps: [
    {
      id: 'hook',
      title: '圏で論理を語る',
      stepType: 'animation',
      content: 'トポスは「圏の中で集合論や論理が展開できる」驚くべき構造です。部分対象分類子が真偽値を一般化し、内部論理が構成される様子をアニメーションで見ましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'topos-intro-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '部分対象分類子を体験',
      stepType: 'interactive',
      content: '部分対象分類子 Ω が部分対象と特性射の間の対応をどう与えるかを視覚的に体験しましょう。Sub(A) ≅ Hom(A, Ω) の対応を確認できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'topos-intro-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: 'トポスの定義',
      stepType: 'explanation',
      content: '（初等）トポスは次を満たす圏です：(1) 有限極限が存在する、(2) 部分対象分類子 Ω が存在する（Sub(A) ≅ Hom(A,Ω) が自然に成立）、(3) カルテシアン閉（冪対象が存在）。Setは最も基本的なトポスです。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: 'トポスの内部論理',
      stepType: 'explanation',
      content: 'トポスでは Ω が真偽値の対象です。Set では Ω={true,false} ですが、一般のトポスでは Ω はより複雑で、直観主義論理に従います（排中律が成り立たない場合がある）。層のトポスでは Ω は開集合の束になります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: 'トポスの特徴を確認',
      stepType: 'quiz',
      content: 'トポスの概念を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: 'トポスの内部論理は一般にどのような論理ですか？',
        options: [
          { id: 'a', label: '古典論理', correct: false },
          { id: 'b', label: '直観主義論理', correct: true },
          { id: 'c', label: '線形論理', correct: false },
          { id: 'd', label: '様相論理', correct: false }
        ],
        explanation: 'トポスの内部論理は一般に直観主義論理です。排中律 P∨¬P は必ずしも成り立ちません。Setでは古典論理ですが、層のトポスなどでは直観主義になります。'
      }
    },
    {
      id: 'alternate',
      title: 'グロタンディーク・トポス',
      stepType: 'explanation',
      content: 'グロタンディーク・トポスは景（site、圏＋グロタンディーク位相）上の層の圏として定義されます。代数幾何でのエタールコホモロジーの理論に不可欠であり、初等トポスより強い構造を持ちます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：トポスの世界観',
      stepType: 'interactive',
      content: 'トポスは「一般化された空間」であり「一般化された論理の宇宙」です。圏論、論理学、幾何学が深く交差する領域であり、数学の基礎に関する新しい視点を提供します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'topos-intro-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
