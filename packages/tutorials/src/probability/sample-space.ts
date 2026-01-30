import { Tutorial } from '../types';

export const sampleSpaceTutorial: Tutorial = {
  id: 'sample-space',
  title: '標本空間と事象',
  description: '標本空間・事象・集合の関係を理解する',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '全ての可能性を並べる',
      content:
        'サイコロを1回振るとき、出る目の全ての可能性は {1, 2, 3, 4, 5, 6} です。この全体の集合を「標本空間」と呼びます。記号ではΩ（オメガ）と書きます。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'sample-space-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'event',
      title: '事象とは',
      content:
        '事象は標本空間の部分集合です。\n\n• 「偶数が出る」→ A = {2, 4, 6}\n• 「3以下が出る」→ B = {1, 2, 3}\n• 「1が出る」→ C = {1}（根元事象）',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'two-dice',
      title: '2つのサイコロの標本空間',
      content:
        '2つのサイコロを振る場合、標本空間は (1,1), (1,2), ..., (6,6) の36通り。各組み合わせが1つの標本点です。「合計が7になる」事象は {(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)} の6通りです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '事象を選んでみよう',
      content:
        '標本空間の中から条件を満たす要素を選ぶことで、事象を構成できます。条件を変えて、事象の大きさがどう変わるか確認しましょう。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'sample-space-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: 'コインを2回投げるとき、標本空間の要素数は？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: 'コインを2回投げるとき、標本空間の要素数は？',
        options: [
          { id: 'a', label: '2', correct: false },
          { id: 'b', label: '3', correct: false },
          { id: 'c', label: '4', correct: true },
          { id: 'd', label: '8', correct: false },
        ],
        explanation:
          '{(表,表), (表,裏), (裏,表), (裏,裏)} の4通りです。n回投げると2^n通りになります。',
      },
    },
    {
      id: 'special-events',
      title: '特別な事象',
      content:
        '• 全事象: Ω そのもの（P(Ω) = 1）\n• 空事象: ∅（P(∅) = 0）\n• 排反事象: A ∩ B = ∅ のとき、AとBは排反\n\n排反事象は同時に起こりえない事象です。例えば「1が出る」と「6が出る」は排反です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '標本空間Ωは全ての可能な結果の集合。事象はΩの部分集合。\n\n• 根元事象: 1つの結果からなる事象\n• 排反事象: 同時に起こらない事象\n• 全事象と空事象は特別な事象\n\n確率は事象に対して定義される関数です。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'sample-space-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
