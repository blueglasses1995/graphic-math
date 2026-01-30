import { Tutorial } from '../types';

export const equivalenceRelationTutorial: Tutorial = {
  id: 'equivalence-relation',
  title: '同値関係',
  description: '集合の要素を「同じグループ」に分類する同値関係を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '仲間分け',
      content:
        '画面に散らばった要素が、色ごとにグループに分かれていきます。\n\n「同じ色」という関係でグループ分けしました。\n\nこの「同じとみなす」関係を数学的に定式化したものが同値関係です。',
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
      title: 'グループ分けしてみよう',
      content:
        '要素をドラッグして同じグループにまとめてみましょう。\n\n同値関係の3つの条件を満たすグループ分けを意識してみてください。',
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
      id: 'example-definition',
      title: '同値関係の3条件',
      content:
        '関係 ∼ が同値関係であるための3条件：\n\n1. 反射律: a ∼ a（自分自身と同値）\n2. 対称律: a ∼ b ならば b ∼ a\n3. 推移律: a ∼ b かつ b ∼ c ならば a ∼ c\n\n例:「同じ誕生月」は同値関係です。\n・自分と自分は同じ月 ✓\n・AとBが同じ月なら、BとAも同じ月 ✓\n・A=B, B=Cが同じ月なら、A=Cも同じ月 ✓',
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
      id: 'example-quotient',
      title: '商集合',
      content:
        '同値関係で分けたグループを「同値類」といいます。\n\n例: 整数を「3で割った余り」で分類\n[0] = {..., -3, 0, 3, 6, ...}\n[1] = {..., -2, 1, 4, 7, ...}\n[2] = {..., -1, 2, 5, 8, ...}\n\n同値類全体の集合を「商集合」ℤ/∼ = {[0], [1], [2]} といいます。\n\nこれが「mod 3 の世界」です。',
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
      content: '次の関係のうち、同値関係でないものは？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '同値関係でないものはどれ？',
        options: [
          { id: 'a', label: '「同じ年齢」', correct: false },
          { id: 'b', label: '「≤（以下）」', correct: true },
          { id: 'c', label: '「同じ国籍」', correct: false },
          { id: 'd', label: '「合同（mod n）」', correct: false },
        ],
        explanation:
          '正解は「≤（以下）」です。\n\n≤ は対称律を満たしません。a ≤ b でも b ≤ a とは限りません（a ≠ b のとき）。\n\n≤ は「順序関係」であり、同値関係ではありません。',
      },
    },
    {
      id: 'alternate',
      title: '分割との対応',
      content:
        '同値関係と分割は1対1に対応します。\n\n分割とは、集合を空でない部分集合に分けて、重なりなく全体を覆うことです。\n\n同値関係 → 同値類による分割\n分割 → 「同じブロックに属する」という同値関係\n\nつまり「グループ分けの仕方」= 「同値関係」です。',
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
        '同値関係のポイント：\n\n・反射律・対称律・推移律の3条件\n・同値類 = 同じとみなすグループ\n・商集合 = 同値類全体の集合\n・同値関係 ⟺ 分割\n\n次は「順序関係」── 要素の大小を定める方法を学びます。',
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
