import { Tutorial } from '../types';

export const predicateLogicTutorial: Tutorial = {
  id: 'predicate-logic',
  title: '述語論理と量化子',
  description: '「すべて」と「ある」を数学的に表現する方法を学ぶ',
  category: 'discrete-math',
  steps: [
    {
      id: 'hook',
      title: '命題論理の限界',
      content:
        '「すべての偶数は2で割り切れる」\n\nこの文は明らかに真ですが、命題論理では表現できません。\n\n「すべての」「ある」という概念を扱うために、述語論理が必要です。',
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
      id: 'predicate',
      title: '述語とは',
      content:
        '述語とは、変数を含む文で、変数に値を代入すると命題になるものです。\n\nP(x)：「xは素数である」\nP(3) = True、P(4) = False\n\nQ(x, y)：「xはyより大きい」\nQ(5, 3) = True、Q(2, 7) = False\n\n述語は「変数を持つ命題」です。',
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
      id: 'quantifiers',
      title: '量化子',
      content:
        '全称量化子 ∀（for all）：「すべてのxについてP(x)」\n∀x P(x) は、定義域のすべてのxでP(x)が真のとき真。\n\n存在量化子 ∃（there exists）：「あるxが存在してP(x)」\n∃x P(x) は、P(x)が真になるxが少なくとも1つあれば真。\n\n例：∀x(x² ≥ 0) は実数で真。∃x(x² = -1) は実数で偽。',
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
      id: 'negation',
      title: '量化子の否定',
      content:
        '量化子の否定は、量化子を入れ替えて中身を否定します：\n\n¬(∀x P(x)) ⟺ ∃x ¬P(x)\n「すべてではない」＝「反例が存在する」\n\n¬(∃x P(x)) ⟺ ∀x ¬P(x)\n「存在しない」＝「すべてが否定」\n\nこれはド・モルガンの法則の一般化です。',
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
      id: 'quiz',
      title: 'クイズ',
      content: '量化子の否定を確認しましょう。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '「すべての鳥は飛べる」の否定は？',
        options: [
          { id: 'a', label: 'すべての鳥は飛べない', correct: false },
          { id: 'b', label: '飛べない鳥が存在する', correct: true },
          { id: 'c', label: 'どの鳥も飛べない', correct: false },
          { id: 'd', label: '鳥は存在しない', correct: false },
        ],
        explanation:
          '正解は「飛べない鳥が存在する」です。¬(∀x P(x)) = ∃x ¬P(x) より、「すべて」の否定は「存在する」に変わり、中身が否定されます。ペンギンが反例です。',
      },
    },
    {
      id: 'nested',
      title: '入れ子の量化子',
      content:
        '量化子の順序は重要です：\n\n∀x ∃y (x + y = 0)：どんなxにも和が0になるyがある → 真（y = -x）\n∃y ∀x (x + y = 0)：あるyがすべてのxとの和を0にする → 偽\n\n∀∃ は「それぞれに対して相手がいる」\n∃∀ は「万能の1つが存在する」\n\n順序を入れ替えると意味が変わります。',
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
        '・述語：変数を含む命題の型\n・全称量化子 ∀：「すべてのxについて」\n・存在量化子 ∃：「あるxが存在して」\n・否定で量化子が入れ替わる\n・量化子の順序は意味を変える\n\n述語論理はデータベースのクエリ（SQL）の理論的基盤です。\n\n次は、数学的帰納法を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
