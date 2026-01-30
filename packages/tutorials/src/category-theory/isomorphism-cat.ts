import { Tutorial } from '../types';

export const isomorphismCatTutorial: Tutorial = {
  id: 'isomorphism-cat',
  title: '同型射',
  category: 'category-theory',
  description: '圏における同型射の概念とその意味を学ぶ',
  steps: [
    {
      id: 'hook',
      title: '逆があるとは',
      stepType: 'animation',
      content: '射 f: A→B に逆射 g: B→A が存在し、g∘f = id_A かつ f∘g = id_B となるとき、fは同型射です。同型な対象は「本質的に同じ」と見なせます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '同型射を見つけよう',
      stepType: 'interactive',
      content: '与えられた圏の中から同型射のペアを見つけてクリックしてください。合成して恒等射になることを確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '集合の同型',
      stepType: 'explanation',
      content: '集合の圏では同型射は全単射（双射）です。例えば f: {1,2,3}→{a,b,c} で f(1)=a, f(2)=b, f(3)=c は全単射なので同型射です。逆射 g(a)=1, g(b)=2, g(c)=3 が存在します。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '同型の重要性',
      stepType: 'explanation',
      content: '圏論では「同型を除いて一意」という表現が頻出します。これは、ある性質を満たす対象が存在し、そのような対象は互いに（一意な）同型射で結ばれることを意味します。普遍性の議論で重要な概念です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '同型射の確認',
      stepType: 'quiz',
      content: '同型射について理解を確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '射 f: A→B が同型射であるための条件は？',
        options: [
          { id: 'a', label: 'fが単射である', correct: false },
          { id: 'b', label: 'fが全射である', correct: false },
          { id: 'c', label: 'g∘f = id_A かつ f∘g = id_B となる g が存在する', correct: true },
          { id: 'd', label: 'f∘f = id_A となる', correct: false }
        ],
        explanation: '同型射は逆射を持つ射です。g∘f = id_A（左逆）かつ f∘g = id_B（右逆）を同時に満たす射gの存在が条件です。'
      }
    },
    {
      id: 'alternate',
      title: '亜群（Groupoid）',
      stepType: 'explanation',
      content: 'すべての射が同型射である圏を亜群（groupoid）と呼びます。特に対象が1つの亜群は群そのものです。基本群は位相空間の亜群から得られる重要な例です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：同型の力',
      stepType: 'interactive',
      content: '同型射は圏論における「同じ」の概念です。厳密な等しさではなく、構造を保つ対応関係により「本質的に同じ」と判断します。この考え方は現代数学の根幹です。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
