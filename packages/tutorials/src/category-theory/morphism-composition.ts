import { Tutorial } from '../types';

export const morphismCompositionTutorial: Tutorial = {
  id: 'morphism-composition',
  title: '射の合成',
  category: 'category-theory',
  description: '射の合成の仕組みと結合律を視覚的に学ぶ',
  steps: [
    {
      id: 'hook',
      title: '矢印をつなげる',
      stepType: 'animation',
      content: 'f: A→B と g: B→C があるとき、g∘f: A→C が得られます。この「矢印をつなげる」操作こそが圏論の心臓部です。合成の連鎖をアニメーションで見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'morphism-composition-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '合成を体験',
      stepType: 'interactive',
      content: '射f, g, hを順番に選んでドラッグし、合成射を作ってみましょう。結合律 h∘(g∘f) = (h∘g)∘f が成り立つことを、2通りの合成順序で確認できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'morphism-composition-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '関数合成との対応',
      stepType: 'explanation',
      content: '集合の圏Setでは、射の合成は関数合成そのものです。f(x) = 2x, g(x) = x+1 のとき、g∘f(x) = g(f(x)) = 2x+1、f∘g(x) = f(g(x)) = 2(x+1) = 2x+2。一般に g∘f ≠ f∘g であり、合成の順序は重要です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '結合律の意味',
      stepType: 'explanation',
      content: '結合律 h∘(g∘f) = (h∘g)∘f は、3つの射をつなげるとき括弧の位置が関係ないことを意味します。これにより、単に h∘g∘f と書けます。可換図式では、A→B→C→D のどのパスを通っても同じ射になることに対応します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '合成の性質を確認',
      stepType: 'quiz',
      content: '射の合成について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: 'f: A→B, g: B→C のとき、合成 g∘f の始域と終域は？',
        options: [
          { id: 'a', label: '始域B、終域C', correct: false },
          { id: 'b', label: '始域A、終域C', correct: true },
          { id: 'c', label: '始域A、終域B', correct: false },
          { id: 'd', label: '始域C、終域A', correct: false }
        ],
        explanation: 'g∘f はまずfでAからBへ、次にgでBからCへ移すので、始域はA、終域はCです。合成射 g∘f: A→C となります。'
      }
    },
    {
      id: 'alternate',
      title: '可換図式',
      stepType: 'explanation',
      content: '圏論では「可換図式」を多用します。図式が「可換」であるとは、同じ始点・終点を持つ異なるパスの合成が等しいことです。例えば、A→B→DとA→C→Dが可換とは、2つのパスによる合成射が等しいことを意味します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：合成の世界',
      stepType: 'interactive',
      content: '射の合成は圏の核心です。結合律により射を自由に連鎖でき、可換図式で関係を視覚的に表現できます。自分で可換図式を描いて、合成関係を確認してみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'morphism-composition-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
