import { Tutorial } from '../types';

export const whatIsSetTutorial: Tutorial = {
  id: 'what-is-set',
  title: '集合とは',
  description: 'ものの集まりを数学的に扱う「集合」の概念を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '集まりを見てみよう',
      content:
        '画面に様々なオブジェクトが浮かんでいます。\n\n赤いものだけを囲んでみると、それが「集合」です。\n\n数学では「ものの集まり」を厳密に扱う方法があります。それが集合論です。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
        circles: [{ radius: 1, color: '#42a5f5', plane: 'xy' }, { radius: 1, color: '#ef5350', plane: 'xy' }],
      },
      customScene: 'what-is-set-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '集合を作ってみよう',
      content:
        '要素をクリックして、自分だけの集合を作ってみましょう。\n\nどんなものでも集められます。数、文字、色、なんでも構いません。\n\n集合を作る感覚をつかんでください。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'what-is-set-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-notation',
      title: '集合の書き方',
      content:
        '集合は波括弧 { } で書きます。\n\nA = {1, 2, 3} は「1と2と3からなる集合A」です。\n\n順番は関係ありません。{1, 2, 3} = {3, 1, 2} です。\n\nまた、同じ要素は1つとして数えます。{1, 1, 2} = {1, 2} です。',
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
      id: 'example-types',
      title: '集合の例',
      content:
        '身近な集合の例を見てみましょう。\n\n・偶数の集合: {2, 4, 6, 8, ...}\n・母音の集合: {a, i, u, e, o}\n・空集合: { }（何も入っていない集合、∅ と書く）\n\n空集合は「何もない」という集合です。0個の要素からなる集合も、立派な集合です。',
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
      content: '次のうち、集合として正しいものはどれでしょう？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '次のうち、集合として正しいものはどれ？',
        options: [
          { id: 'a', label: '{1, 2, 2, 3} は {1, 2, 3} とは異なる', correct: false },
          { id: 'b', label: '{1, 2, 3} = {3, 2, 1}', correct: true },
          { id: 'c', label: '空集合は集合ではない', correct: false },
          { id: 'd', label: '集合の要素には順番がある', correct: false },
        ],
        explanation:
          '正解は {1, 2, 3} = {3, 2, 1} です。\n\n集合では順番は関係なく、重複する要素は1つとして数えます。空集合も立派な集合です。',
      },
    },
    {
      id: 'alternate',
      title: 'ベン図で考える',
      content:
        '集合を視覚的に表す方法として「ベン図」があります。\n\n丸や楕円で囲んだ領域が1つの集合を表します。\n\n中に要素を書き込むと、どの要素がどの集合に属しているかが一目でわかります。\n\nベン図はこれからたくさん使います。「丸の中にあれば、その集合に属する」と覚えましょう。',
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
        '集合とは「ものの集まり」を数学的に扱う概念です。\n\n・波括弧 { } で書く\n・順番は関係ない\n・重複は1つとして数える\n・空集合 ∅ も集合\n・ベン図で視覚化できる\n\n次は、要素が集合に「属する」とはどういうことかを学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'what-is-set-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
