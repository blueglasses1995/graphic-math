import { Tutorial } from '../types';

export const elementMembershipTutorial: Tutorial = {
  id: 'element-membership',
  title: '要素と所属',
  description: '要素が集合に属する（∈）とはどういうことかを学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '中にいる？外にいる？',
      content:
        'ベン図の中に点が飛び交っています。\n\n丸の中に入った点は集合の「要素」、外にある点は「要素ではない」。\n\nこのシンプルな区別が、集合論の出発点です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '要素を動かしてみよう',
      content:
        '要素をドラッグして、集合の中に入れたり外に出したりしてみましょう。\n\n中に入ると ∈（属する）、外に出ると ∉（属さない）と表示されます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-belongs',
      title: '∈ の記号',
      content:
        'A = {1, 2, 3} のとき：\n\n・2 ∈ A（2はAに属する）\n・5 ∉ A（5はAに属さない）\n\n∈ は「属する」を意味する記号で、ε（イプシロン）が由来です。\n\n「要素（element）のe」と覚えると便利です。',
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
      id: 'example-careful',
      title: '注意すべき例',
      content:
        'A = {1, {2, 3}} のとき：\n\n・1 ∈ A ✓\n・{2, 3} ∈ A ✓（集合そのものが要素）\n・2 ∉ A ✗（2はAの直接の要素ではない）\n\n要素として「集合そのもの」が入ることもあります。入れ子になっていても、直接の要素かどうかが大切です。',
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
      content: 'A = {1, {2}, 3} のとき、次のうち正しいものはどれ？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'A = {1, {2}, 3} のとき、正しいのはどれ？',
        options: [
          { id: 'a', label: '2 ∈ A', correct: false },
          { id: 'b', label: '{2} ∈ A', correct: true },
          { id: 'c', label: '{1, 2} ∈ A', correct: false },
          { id: 'd', label: 'Aの要素は4つ', correct: false },
        ],
        explanation:
          '正解は {2} ∈ A です。\n\nAの要素は 1, {2}, 3 の3つです。2そのものはAの要素ではなく、{2}という集合がAの要素です。',
      },
    },
    {
      id: 'alternate',
      title: 'プログラミングとの対比',
      content:
        'プログラミングでいえば、集合はSetデータ構造に対応します。\n\n・Python: 2 in {1, 2, 3}  # True\n・JavaScript: new Set([1,2,3]).has(2)  // true\n\n∈ は「in」や「has」に相当します。\n\nプログラムでの「含まれるかどうか」の判定は、まさに集合の所属判定です。',
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
        '要素と所属のポイント：\n\n・∈ は「属する」、∉ は「属さない」\n・集合そのものが要素になることもある\n・所属は「直接の要素かどうか」で判定\n\n次は「部分集合」── ある集合が別の集合に含まれる関係を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
