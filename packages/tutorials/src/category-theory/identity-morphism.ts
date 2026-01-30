import { Tutorial } from '../types';

export const identityMorphismTutorial: Tutorial = {
  id: 'identity-morphism',
  title: '恒等射',
  category: 'category-theory',
  description: '恒等射の役割と単位律を理解する',
  steps: [
    {
      id: 'hook',
      title: '何もしない矢印の力',
      stepType: 'animation',
      content: '各対象Aには「何もしない」射 id_A: A→A が存在します。一見無意味に思えるこの射が、圏の構造を支える重要な役割を果たします。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'touch',
      title: '恒等射と合成',
      stepType: 'interactive',
      content: 'f: A→B に対して、f∘id_A と id_B∘f を計算してみましょう。どちらも f と一致することを視覚的に確認できます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    },
    {
      id: 'example-1',
      title: '単位律',
      stepType: 'explanation',
      content: '恒等射の最も重要な性質は単位律です。任意の射 f: A→B に対して、f∘id_A = f（右単位律）かつ id_B∘f = f（左単位律）が成り立ちます。これは数の掛け算における1の役割（1×n = n×1 = n）に類似しています。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'example-2',
      title: '具体例で理解',
      stepType: 'explanation',
      content: '集合の圏では恒等射は恒等関数 id(x) = x です。任意の関数 f に対して f(id(x)) = f(x) かつ id(f(x)) = f(x) が成り立ちます。プログラミングでは identity 関数として実装されます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'predict',
      title: '恒等射の理解を確認',
      stepType: 'quiz',
      content: '恒等射について考えましょう。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
      quiz: {
        question: '恒等射 id_A について正しいものはどれですか？',
        options: [
          { id: 'a', label: '存在しない対象がある', correct: false },
          { id: 'b', label: '合成の単位元として機能する', correct: true },
          { id: 'c', label: '常に一意とは限らない', correct: false },
          { id: 'd', label: '他の射に影響を与える', correct: false }
        ],
        explanation: '恒等射は各対象に一意に存在し、合成の単位元として機能します。f∘id = f かつ id∘f = f が恒等射の定義的性質です。'
      }
    },
    {
      id: 'alternate',
      title: 'モノイドとの関係',
      stepType: 'explanation',
      content: '対象が1つだけの圏を考えると、射の全体は合成を演算とするモノイド（単位元を持つ半群）になります。恒等射がモノイドの単位元に対応します。圏論はモノイドの「多対象版」とも言えます。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: false,
      nextCondition: 'click',
    },
    {
      id: 'summary',
      title: 'まとめ：恒等射の本質',
      stepType: 'interactive',
      content: '恒等射は「何もしない」射ですが、圏の公理を支える不可欠な要素です。単位律により合成が安定し、対象を射を通じて識別する基盤となります。',
      sceneConfig: { showGrid: true, showAxes: true, cameraPosition: [0, 0, 5] },
      interactive: true,
      nextCondition: 'interaction',
    }
  ]
};
