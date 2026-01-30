import { Tutorial } from '../types';

export const functionSetTutorial: Tutorial = {
  id: 'function-set',
  title: '写像（関数）の集合的定義',
  description: '関数を集合論の言葉で定義する方法を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '矢印の束',
      content:
        '左の集合から右の集合へ、矢印が伸びています。\n\n左の各要素から、ちょうど1本ずつ矢印が出ています。\n\nこの「矢印の束」が、集合論における関数の正体です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
        circles: [{ radius: 1, color: '#42a5f5', plane: 'xy' }, { radius: 1, color: '#ef5350', plane: 'xy' }],
      },
      customScene: 'function-set-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '写像を作ってみよう',
      content:
        '左の要素から右の要素へ矢印をつなげて、写像を作りましょう。\n\n各要素からちょうど1本の矢印が必要です。2本出したり0本にはできません。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'function-set-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-definition',
      title: '写像の集合的定義',
      content:
        '写像 f: A → B は、直積 A × B の部分集合で、次を満たすもの：\n\nすべての a ∈ A に対して、(a, b) ∈ f となる b ∈ B がちょうど1つ存在する。\n\n例: f = {(1,a), (2,b), (3,a)}\nこれは A={1,2,3} から B={a,b} への写像です。\n\n「y = f(x)」は「(x, y) ∈ f」と同じ意味です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'example-domain-range',
      title: '定義域と値域',
      content:
        'f: A → B において：\n\n・A を定義域（domain）\n・B を終域（codomain）\n・f(A) = {f(a) | a ∈ A} を値域（range/image）\n\n例: f(x) = x² で A = {-2,-1,0,1,2}\n定義域 = {-2,-1,0,1,2}\n終域 = ℝ（すべての実数）\n値域 = {0, 1, 4}（実際に出力される値）\n\n終域と値域は異なることがあります。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'predict',
      title: '考えてみよう',
      content: '次のうち、A={1,2} から B={a,b,c} への写像はどれ？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'A={1,2}, B={a,b,c} への写像として正しいものは？',
        options: [
          { id: 'a', label: '{(1,a), (2,b), (2,c)}', correct: false },
          { id: 'b', label: '{(1,a)}', correct: false },
          { id: 'c', label: '{(1,b), (2,b)}', correct: true },
          { id: 'd', label: '{(a,1), (b,2)}', correct: false },
        ],
        explanation:
          '正解は {(1,b), (2,b)} です。\n\n各要素からちょうど1つの行き先が必要です。\n(a)は2に2つの行き先がある、(b)は2に行き先がない、(d)は方向が逆。',
      },
    },
    {
      id: 'alternate',
      title: '関数の集合',
      content:
        'A から B への写像全体の集合を B^A と書きます。\n\n|B^A| = |B|^|A|\n\n例: |A|=2, |B|=3 のとき |B^A| = 3² = 9 通り\n\nこの記法は冪集合と繋がります。\nP(A) は A から {0,1} への関数全体と同じ。\n|P(A)| = 2^|A| = |{0,1}^A|',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '写像の集合的定義：\n\n・写像 = 直積の部分集合（各要素に行き先が1つ）\n・定義域、終域、値域の区別が重要\n・B^A = AからBへの写像全体\n・|B^A| = |B|^|A|\n\n次は「全射・単射・全単射」── 写像の分類を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'function-set-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
