import { Tutorial } from '../types';

export const whyCategoryTutorial: Tutorial = {
  id: 'why-category',
  title: 'なぜ圏論？',
  category: 'category-theory',
  description: '圏論がなぜ現代数学やプログラミングで重要なのかを直感的に理解する',
  steps: [
    {
      id: 'hook',
      title: '数学の共通言語',
      stepType: 'animation',
      content: '集合論、代数学、位相空間論、プログラミング——これらすべてに共通する「構造」を記述する言語があります。それが圏論です。異なる分野の間に潜む共通パターンをアニメーションで見てみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'why-category-animation',
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '構造の対応を体験',
      stepType: 'interactive',
      content: '集合の間の写像、群の間の準同型、位相空間の間の連続写像——これらはすべて「射」として統一できます。対応関係をドラッグして確認してみましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'why-category-interactive',
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '抽象化の力',
      stepType: 'explanation',
      content: '圏論は「対象」と「射（矢印）」だけで数学的構造を捉えます。例えば、集合の圏では対象が集合、射が写像です。群の圏では対象が群、射が準同型写像です。この抽象化により、異なる分野の定理を一度に証明できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: 'プログラミングへの応用',
      stepType: 'explanation',
      content: 'Haskellの型システムは圏論的に理解できます。型が対象、関数が射です。Functor, Monad, Natural Transformationなどの概念は圏論から直接来ています。圏論を学ぶことでプログラミングの設計パターンを深く理解できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '圏論の本質を確認',
      stepType: 'quiz',
      content: '圏論の基本的な考え方について確認しましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '圏論が扱う基本的な要素はどれですか？',
        options: [
          { id: 'a', label: '数と演算', correct: false },
          { id: 'b', label: '対象と射（矢印）', correct: true },
          { id: 'c', label: '点と線分', correct: false },
          { id: 'd', label: '変数と方程式', correct: false }
        ],
        explanation: '圏論は「対象」と「射（矢印）」を基本要素として、数学的構造を統一的に記述します。射の合成と恒等射が圏の公理を形成します。'
      }
    },
    {
      id: 'alternate',
      title: '歴史的背景',
      stepType: 'explanation',
      content: '圏論は1945年にアイレンベルクとマックレーンによって導入されました。当初は代数的位相幾何学の道具でしたが、今や数学全体の基礎言語として、さらにはコンピュータサイエンスや物理学にも応用が広がっています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：圏論の全体像',
      stepType: 'interactive',
      content: '圏論は「構造の構造」を扱う数学です。対象と射という最小限の概念から出発し、関手、自然変換、普遍性など強力な概念を構築します。これからの学習で、この抽象的な世界を一歩ずつ探検していきましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      customScene: 'why-category-summary',
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
