import { Tutorial } from '../types';

export const axiomOfChoiceTutorial: Tutorial = {
  id: 'axiom-of-choice',
  title: '選択公理のイメージ',
  description: '無限個の集合から要素を「選ぶ」ことの深い問題を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '無限の靴下',
      content:
        '無限に並んだ引き出しがあり、各引き出しに靴下が入っています。\n\n各引き出しから1つずつ靴下を選べますか？\n\n有限なら簡単。でも無限のとき、これは自明ではないのです。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
        circles: [{ radius: 1, color: '#42a5f5', plane: 'xy' }, { radius: 1, color: '#ef5350', plane: 'xy' }],
      },
      customScene: 'axiom-of-choice-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'animation',
    },
    {
      id: 'touch',
      title: '選んでみよう',
      content:
        '各集合から1つずつ要素を選んでみましょう。\n\n有限個なら直感的にできます。でも無限個あったら？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'axiom-of-choice-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'example-statement',
      title: '選択公理とは',
      content:
        '選択公理（AC）：\n空でない集合の族 {Aᵢ}ᵢ∈I に対して、各 Aᵢ から1つずつ要素を選ぶ関数 f が存在する。\n\nつまり f(i) ∈ Aᵢ を満たす f: I → ∪Aᵢ が存在する。\n\n有限の場合は自明ですが、無限の場合は他の公理からは証明できません。\n\nそこで「公理」として認めるかどうかが問題になります。',
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
      id: 'example-consequences',
      title: '選択公理の帰結',
      content:
        '選択公理を認めると、多くの便利な定理が得られます。\n\n・ツォルンの補題（半順序集合に極大元が存在）\n・整列定理（任意の集合に整列順序が入る）\n・任意のベクトル空間に基底が存在\n\nしかし驚くべき帰結もあります。\n・バナッハ＝タルスキの逆理：球を分解して同じ大きさの球2つに再構成できる\n\nこの「不思議な分解」が選択公理の議論を呼ぶ理由です。',
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
      content: '選択公理について正しいのはどれ？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '選択公理について正しい記述は？',
        options: [
          { id: 'a', label: '他の公理から証明できる', correct: false },
          { id: 'b', label: '他の公理から反証できる', correct: false },
          { id: 'c', label: '認めても認めなくても矛盾しない', correct: true },
          { id: 'd', label: '有限集合の場合にも必要', correct: false },
        ],
        explanation:
          '正解は「認めても認めなくても矛盾しない」です。\n\nゲーデルとコーエンが示しました。ZF公理系と選択公理は独立です。\n選択公理を認めたZFC公理系が、現代数学の標準です。',
      },
    },
    {
      id: 'alternate',
      title: '靴と靴下の喩え',
      content:
        'ラッセルの喩え：\n\n無限足の靴から片方ずつ選ぶのは簡単。「右足」という規則があるから。\n\nでも無限足の靴下から片方ずつ選ぶには選択公理が必要。靴下は左右の区別がないので、「選び方の規則」が書けません。\n\n選択公理は「規則なしに選べる」ことを保証します。',
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
        '選択公理のポイント：\n\n・無限個の集合から1つずつ選ぶ関数の存在を保証\n・有限なら不要、無限で必要\n・ZF公理系とは独立（認めても矛盾しない）\n・ツォルンの補題、整列定理と同値\n\n次は「ラッセルのパラドクス」── 集合論の衝撃的な危機を学びます。',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      customScene: 'axiom-of-choice-summary',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
  ],
};
