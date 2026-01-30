import { Tutorial } from '../types';

export const orderRelationTutorial: Tutorial = {
  id: 'order-relation',
  title: '順序関係',
  description: '集合に「大小」や「前後」の構造を与える順序関係を学ぶ',
  category: 'set-theory',
  steps: [
    {
      id: 'hook',
      title: '並べ替える',
      content:
        'バラバラに散らばった要素が、矢印で繋がれていきます。\n\na → b は「aはb以下」を意味します。\n\nこの矢印の構造が「順序関係」です。',
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
      title: '順序をつけてみよう',
      content:
        '要素間に矢印をつけて、順序関係を作ってみましょう。\n\n3つの条件を満たす必要があります。',
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
      id: 'example-partial',
      title: '半順序関係',
      content:
        '半順序関係 ≤ の3条件：\n\n1. 反射律: a ≤ a\n2. 反対称律: a ≤ b かつ b ≤ a ならば a = b\n3. 推移律: a ≤ b かつ b ≤ c ならば a ≤ c\n\n同値関係と似ていますが、「対称律」が「反対称律」に変わっています。\n\n例: 集合の包含関係 ⊆ は半順序です。',
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
      id: 'example-total',
      title: '全順序と半順序',
      content:
        '全順序: すべての2要素が比較可能（a ≤ b または b ≤ a）\n例: 実数の ≤、辞書式順序\n\n半順序: 比較できないペアがありうる\n例: 集合の ⊆\n{1,2} と {2,3} は ⊆ で比較できない\n\nハッセ図で半順序を視覚化できます。下から上へ「小さい→大きい」を表します。',
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
      content: '自然数の「割り切る」関係は何順序？',
      sceneConfig: {
        showGrid: false,
        showAxes: false,
        cameraPosition: [0, 0, 5],
      },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '「a | b（aはbを割り切る）」はどんな順序？',
        options: [
          { id: 'a', label: '全順序', correct: false },
          { id: 'b', label: '半順序', correct: true },
          { id: 'c', label: '同値関係', correct: false },
          { id: 'd', label: '順序関係ではない', correct: false },
        ],
        explanation:
          '正解は半順序です。\n\n反射律: a | a ✓\n反対称律: a | b かつ b | a ならば a = b ✓\n推移律: a | b かつ b | c ならば a | c ✓\n\nしかし全順序ではない: 2 と 3 は互いに割り切れません。',
      },
    },
    {
      id: 'alternate',
      title: '最大元・最小元・上限・下限',
      content:
        '順序関係には特別な要素があります。\n\n・最小元: すべての要素以下の要素\n・最大元: すべての要素以上の要素\n・上限（sup）: ある部分集合の「最小の上界」\n・下限（inf）: ある部分集合の「最大の下界」\n\n例: {2, 3, 4} の ≤ での最小元は2、最大元は4。\n半順序では最大元・最小元が存在しないこともあります。',
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
        '順序関係のポイント：\n\n・半順序: 反射律・反対称律・推移律\n・全順序: 半順序 + すべてのペアが比較可能\n・ハッセ図で視覚化\n・最大元・最小元・上限・下限\n\n次は「選択公理」── 集合論の深い話題に触れます。',
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
