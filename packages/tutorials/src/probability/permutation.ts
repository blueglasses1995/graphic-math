import { Tutorial } from '../types';

export const permutationTutorial: Tutorial = {
  id: 'permutation',
  title: '順列',
  description: '並べ方の数を体系的に数える順列の考え方',
  category: 'probability',
  steps: [
    {
      id: 'hook',
      title: '並べ方は何通り？',
      content:
        'A, B, C の3人を一列に並べる方法は？ABC, ACB, BAC, BCA, CAB, CBA の6通り。これが順列です。n個のものを並べる方法は n! (階乗) 通りです。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'permutation-animation',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'factorial',
      title: '階乗',
      content:
        'n! = n × (n-1) × (n-2) × ... × 2 × 1\n\n• 3! = 3×2×1 = 6\n• 5! = 5×4×3×2×1 = 120\n• 0! = 1（定義）\n\n最初にn通り、次にn-1通り…と選択肢が減っていく積です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'partial',
      title: 'n個からr個選んで並べる',
      content:
        'nPr = n! / (n-r)!\n\n5人から3人選んで並べる: 5P3 = 5×4×3 = 60\n\n最初5通り → 次4通り → 次3通り、掛け算の原理で60通りです。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'interactive',
      title: '順列を数えてみよう',
      content:
        'n と r を変えて nPr がどう変わるか確認しましょう。nが大きくなると値は爆発的に増えます。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'permutation-interactive',
      interactive: true,
      nextCondition: 'click',
      stepType: 'interactive',
    },
    {
      id: 'quiz',
      title: 'クイズ',
      content: '7人から会長・副会長・書記を選ぶ方法は何通り？',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'quiz',
      quiz: {
        question: '7人から会長・副会長・書記を選ぶ方法は？',
        options: [
          { id: 'a', label: '35', correct: false },
          { id: 'b', label: '210', correct: true },
          { id: 'c', label: '120', correct: false },
          { id: 'd', label: '5040', correct: false },
        ],
        explanation:
          '役職が異なるので順列。7P3 = 7×6×5 = 210通りです。',
      },
    },
    {
      id: 'with-repetition',
      title: '重複順列',
      content:
        '同じものを繰り返し使える場合は重複順列:\n\nnΠr = nʳ\n\n例: 0-9の数字で3桁の暗証番号 → 10³ = 1000通り\n\n各位置でn通りの選択肢があるので、nのr乗です。',
      sceneConfig: { showGrid: false, showAxes: false },
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
    {
      id: 'summary',
      title: 'まとめ',
      content:
        '順列のポイント:\n\n• n! = n個全部の並べ方\n• nPr = n個からr個選んで並べる方法\n• 重複順列 nʳ = 繰り返しOKの並べ方\n• 「順序が大事」なら順列を使う\n\n次は「組合せ」で順序を気にしない数え方を学びます。',
      sceneConfig: {
        showGrid: false, showAxes: false,
      },
      customScene: 'permutation-summary',
      interactive: false,
      nextCondition: 'click',
      stepType: 'explanation',
    },
  ],
};
